import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TranslationService } from './translation.service';

@Injectable()
export class TranslationGuard implements CanActivate {
  /**
   * Constructor of the class
   *
   * @param {TranslationService}  translationService
   */
  public constructor(private translationService: TranslationService) { }

  /**
   * Purpose of this guard is to load current route possible translations so that we can use those easily.
   *
   * @param {ActivatedRouteSnapshot}  next
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<any>}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.translationService
        .loadTranslationsForDomain(next.routeConfig.path)
        .subscribe(() => {
          observer.next(true);
          observer.complete();
        });
    });
  }
}
