import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocaleInterface, TranslationService } from '../../../shared/translation/';

@Injectable()
export class LocaleResolver implements Resolve<Observable<Array<LocaleInterface>>> {
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
   * @returns {Observable<Array<LocaleInterface>>}
   */
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<LocaleInterface>> {
    return this.translationService.getLocales();
  }
}
