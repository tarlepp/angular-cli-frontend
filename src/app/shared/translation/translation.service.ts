import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../services/config.service';

@Injectable()
export class TranslationService {
  private translationUrl: string;

  /**
   * Constructor of the class.
   *
   * @param {Http}              http
   * @param {TranslateService}  translateService
   * @param {ConfigService}     configService
   */
  public constructor(
    private http: Http,
    private translateService: TranslateService,
    private configService: ConfigService
  ) {
    // Determine what url to use to fetch these translations; 1) local 2) remote
    this.translationUrl = this.configService.get('USE_LOCAL_TRANSLATIONS')
      ? `./assets/i18n/` : `${this.configService.getApiUrl()}translation/`;
  }

  /**
   * Getter method for domain specified translations. Note that this method fill load these translations automatically
   * to translate service so that those are usable right away.
   *
   * @param {string}  domain
   * @returns {Observable<Object>}
   */
  public loadTranslationsForDomain(domain: string): Observable<Object> {
    return this.http
      .get(`${this.translationUrl}${domain}/${this.translateService.currentLang}.json`)
      .map((res: Response) => { // Aah, happy path - so happy now
        // Merge translations to current one
        this.translateService.setTranslation(this.translateService.currentLang, res.json(), true);

        return res.json();
      })
      .catch((error: any) => { // And in any error we just want to resolve true and log possible errors...
        console.error('Translation not found...', error);

        return Observable.of({});
      });
  }
}
