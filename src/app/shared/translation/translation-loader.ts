import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Config } from '../../config/config';

export class TranslationLoader implements TranslateLoader {
  /**
   * Constructor of the class.
   *
   * @param {Http}  http
   */
  constructor(private http: Http) {}

  /**
   * Gets the translations from the server
   *
   * @param {string}  lang
   * @returns {Observable<any>}
   */
  public getTranslation(lang: string): Observable<any> {
    return this.http
      .get(`${Config.API.URL}translation/${lang}.json`)
      .map((res: Response) => res.json());
  }
}
