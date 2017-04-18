import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Event, NavigationEnd, Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../../services/config.service';
import { TranslationCacheService } from './translation-cache.service';
import { DomainCacheModel, LocaleModel } from '../models/';

@Injectable()
export class TranslationService {
  private translationUrl: string;
  private language: string;
  private domain: string;
  private url: string;
  private loadedDomains: Array<string> = [];
  private loadedDomainsCommon: Array<string> = [];
  private loadedDomainsCache: Object = {};
  private loadedDomainsCacheCommon: Object = {};

  /**
   * Constructor of the class.
   *
   * @param {Http}                    http
   * @param {Router}                  router
   * @param {LocalStorageService}     localStorage
   * @param {TranslateService}        translateService
   * @param {TranslationCacheService} translationCacheService
   * @param {ConfigService}           configService
   */
  public constructor(
    private http: Http,
    private router: Router,
    private localStorage: LocalStorageService,
    private translateService: TranslateService,
    private translationCacheService: TranslationCacheService,
    private configService: ConfigService
  ) {
    // Store current language
    this.language = this.translateService.currentLang;

    // Determine what url to use to fetch these translations; 1) local 2) remote
    this.translationUrl = this.configService.get('USE_LOCAL_TRANSLATIONS')
      ? `./assets/i18n/` : `${this.configService.getApiUrl()}translation/`;

    // On language changes we need to make sure that domain related texts are loaded
    this.translateService
      .onLangChange
      .subscribe((event: LangChangeEvent) => {
        if (event.lang !== this.language) {
          this.reloadTranslations(event);
        }
      });

    // Subscribe to router events, so we can store/reset some needed data
    this.router
      .events
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          // Store loaded domains to cache
          this.loadedDomainsCache[event.url] = this.loadedDomains;
          this.loadedDomainsCacheCommon[event.url] = this.loadedDomainsCommon;

          // Reset cache
          this.loadedDomains = [];
          this.loadedDomainsCommon = [];

          // Store current url
          this.url = event.url;
        }
      });
  }

  /**
   * Method to fetch supported locales.
   *
   * @returns {Observable<Array<LocaleModel>>}
   */
  public getLocales(): Observable<Array<LocaleModel>> {
    return this.http
      .get(`${this.translationUrl}locales.json`)
      .map((res: Response) => res.json());
  }

  /**
   * Method to load translations for given domain. Note that this will split given domain to parts and try to fetch
   * translations to each of them. Eg. if domain is /Foo/Bar/FooBar then this will try to load following translations:
   *  - /Foo/en.json
   *  - /Foo/Bar/en.json
   *  - /Foo/Bar/FooBar/en.json
   *
   * And those texts are merged to final result in that order - So that you can easily override some texts within your
   * domain and still have some "default" translation for that same.
   *
   * @param {string}  domain
   * @param {boolean} common
   * @returns {Observable<Array<string>>}
   */
  public load(domain: string, common: boolean): Observable<Array<string>> {
    const parts: Array<string> = [];
    const observables = domain.split('/').map((part: string) => {
      parts.push(part);

      return this.loadTranslations([...parts].join('/'), common);
    });

    return new Observable<Array<string>>(observer => {
      Observable
        .forkJoin(observables)
        .subscribe((results) => {
          observer.next(results
            .filter(domainPart => domainPart)
            .map((domainPart: string) => {
              this.loadTranslation(this.language, domainPart);

              return domainPart;
            })
          );

          observer.complete();
        });
    });
  }

  /**
   * Method to fetch domain translations from cache or specified translation url.
   *
   * @param {string}  domain
   * @param {boolean} common
   * @returns {Observable<string|boolean>}
   */
  private loadTranslations(domain: string, common: boolean): Observable<string|boolean> {
    if (this.translationCacheService.cached(this.language, domain, common)) {
      return Observable.of(domain);
    }

    // Store current domain to cache
    common ? this.loadedDomainsCommon.push(domain) : this.loadedDomains.push(domain);

    // Remove possible duplicates from loaded domains
    this.loadedDomains = this.loadedDomains.filter((x, i, a) => a.indexOf(x) === i);
    this.loadedDomainsCommon = this.loadedDomainsCommon.filter((x, i, a) => a.indexOf(x) === i);

    return this.fetchTranslations(domain, this.language, common);
  }

  /**
   * Method to fetch domain + language specified translations from specified location:
   *  1) Local
   *  2) Remote
   *
   * And if/when an error happens when fetching those translations, just silently ignore those - there aren't errors
   * in all of the cases - and really these don't prevent to use application.
   *
   * Note that in each case we store language + domain data to cache - so that we won't trigger fetching multiple times
   * when user navigates in application.
   *
   * @param {string}  language
   * @param {string}  domain
   * @param {boolean} common
   * @returns {Observable<string|boolean>}
   */
  private fetchTranslations(domain: string, language: string, common: boolean): Observable<string|boolean> {
    return this.http
      .get(`${this.translationUrl}${domain}/${language}.json`)
      .map((res: Response) => { // Aah, happy path - so happy now
        const translations = res.json();

        // Store translations to cache
        this.translationCacheService.store(language, domain, translations, common);

        return domain;
      })
      .catch((error: any) => { // And in any error we just want to resolve true and log possible errors...
        console.warn(`Translation not found for domain '${domain}'...`, error);

        // Store translations to cache - yes we really want to do this...
        this.translationCacheService.store(language, domain, {}, common);

        return Observable.of(false);
      });
  }

  /**
   * Method to load translations from cache and set those to translate service.
   *
   * @param {string}  language
   * @param {string}  domain
   */
  private loadTranslation(language: string, domain: string) {
    this.translateService.setTranslation(language, this.translationCacheService.get(language, domain), true);
  }

  /**
   * Method to reload translations - this is run whenever user changes language in the application. Within this method
   * we want to do following things:
   *  1) Store new language to local storage - so that user can refresh page
   *  2) Determine which common and not-common domains to load
   *    2.1) Note that in this case we already know exact domains - so no need to split those apart again
   *    2.2) Also note that we need to load those domains in that specified order
   *
   * @param {LangChangeEvent} event
   */
  private reloadTranslations(event: LangChangeEvent): void {
    const domains: Array<DomainCacheModel> = [];

    this.language = event.lang;
    this.localStorage.store('language', this.language);

    // Domain in the common cache so load it
    if (this.loadedDomainsCacheCommon.hasOwnProperty(this.url)) {
      this.loadedDomainsCacheCommon[this.url]
        .map(domain => {
          domains.push({domain: domain, common: true});
        });
    }

    // Domain in the cache so load it
    if (this.loadedDomainsCache.hasOwnProperty(this.url)) {
      this.loadedDomainsCache[this.url]
        .map(domain => {
          domains.push({domain: domain, common: false});
        });
    }

    // Fork join domain observables and load translations in correct order
    Observable
      .forkJoin(domains.map(data => this.loadTranslations(data.domain, data.common)))
      .subscribe((results) => {
        results
          .filter((domain: string|boolean) => domain)
          .map((domain: string) => {
            this.loadTranslation(this.language, domain);
          });
      });
  }
}
