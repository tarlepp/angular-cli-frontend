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
   * @param {string}  lang
   * @returns {Observable<any>}
   */
  public getTranslation(lang: string): Observable<any> {
    return this.http
      .get(`${this.configService.getApiUrl()}translation/${lang}.json`)
      .map((res: Response) => res.json());
  }
}
