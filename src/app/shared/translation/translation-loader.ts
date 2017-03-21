import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { ConfigService } from '../services/config.service';

export class TranslationLoader implements TranslateLoader {
  /**
   * Constructor of the class.
   *
   * @param {Http}          http
   * @param {ConfigService} configService
   */
  constructor(
    private http: Http,
    private configService: ConfigService
  ) { }

  /**
   * Gets the translations from the server
   *
   * @param {string}  language
   * @returns {Observable<any>}
   */
  public getTranslation(language: string): Observable<any> {
    const url = this.configService.get('USE_LOCAL_TRANSLATIONS')
      ? `./assets/i18n/`
      : `${this.configService.getApiUrl()}translation/`
    ;

    return this.http
      .get(`${url}${language}.json`)
      .map((res: Response) => res.json());
  }
}
