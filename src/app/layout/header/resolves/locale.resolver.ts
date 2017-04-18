import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocaleModel, TranslationService } from '../../../shared/translation/';

@Injectable()
export class LocaleResolver implements Resolve<Observable<Array<LocaleModel>>> {
  /**
   * Constructor of the class.
   *
   * @param {TranslationService}  translationService
   */
  public constructor(private translationService: TranslationService) { }

  /**
   * Resolve method to fetch locale data from remote/local server.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   *
   * @returns {Observable<Array<LocaleModel>>}
   */
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<LocaleModel>> {
    return this.translationService.getLocales();
  }
}
