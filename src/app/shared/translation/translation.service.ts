import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../services/config.service';
import { TranslationCacheService } from './translation-cache.service';
import { LocaleInterface } from './interfaces/';

@Injectable()
export class TranslationService {
  private translationUrl: string;
  private language: string;
  private domain: string;

  /**
   * Constructor of the class.
   *
   * @param {Http}                    http
   * @param {TranslateService}        translateService
   * @param {TranslationCacheService} translationCacheService
   * @param {ConfigService}           configService
   */
  public constructor(
    private http: Http,
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
          this.language = event.lang;
        }

        if (this.domain) {
          this.loadTranslationsForDomain(this.domain).subscribe();
        }
      });
  }

  /**
   * Method to fetch supported locales.
   *
   * @returns {Observable<Array<LocaleInterface>>}
   */
  public getLocales(): Observable<Array<LocaleInterface>> {
    return this.http
      .get(`${this.translationUrl}locales.json`)
      .map((res: Response) => res.json());
  }

  /**
   * Getter method for domain specified translations. Note that this method fill load these translations automatically
   * to translate service so that those are usable right away.
   *
   * @param {string}  domain
   * @returns {Observable<Object>}
   */
  public loadTranslationsForDomain(domain: string): Observable<Object> {
    // Store current domain
    this.domain = domain;

    // Translations are in cache, so just use those
    if (this.translationCacheService.cached(this.language, domain)) {
      this.loadTranslations(this.language, domain);

      return Observable.of({});
    }

    // Otherwise fetch translations
    return this.fetchTranslationsForDomain(domain, this.language);
  }

  /**
   * Method to fetch domain + language specified translations from specified location:
   *  1) Local
   *  2) Remote
   *
   * After fetching translation data, merge those to current translations and store those to cache.
   *
   * And if/when an error happens when fetching those translations, just silently ignore those - there aren't errors
   * in all of the cases - and really these don't prevent to use application.
   *
   * @param {string}  language
   * @param {string}  domain
   * @returns {Observable<Object>}
   */
  private fetchTranslationsForDomain(domain: string, language: string): Observable<Object> {
    return this.http
      .get(`${this.translationUrl}${domain}/${language}.json`)
      .map((res: Response) => { // Aah, happy path - so happy now
        const translations = res.json();

        // Store translations to cache
        this.translationCacheService.store(language, domain, translations);

        // And load translations
        this.loadTranslations(language, domain);

        return translations;
      })
      .catch((error: any) => { // And in any error we just want to resolve true and log possible errors...
        console.error('Translation not found...', error);

        return Observable.of({});
      });
  }

  /**
   * Method to load translations from cache and set those to translate service.
   *
   * @param {string}  language
   * @param {string}  domain
   */
  private loadTranslations(language: string, domain: string) {
    this.translateService.setTranslation(language, this.translationCacheService.get(language, domain), false);
  }
}
