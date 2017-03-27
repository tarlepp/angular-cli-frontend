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
   * @returns {Observable<boolean>}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Determine current domain name
    const domain = next.pathFromRoot
      .filter((routeSnapshot: ActivatedRouteSnapshot) => {
        return routeSnapshot.routeConfig !== null;
      })
      .map((routeSnapshot: ActivatedRouteSnapshot) => {
        return routeSnapshot.routeConfig.path;
      })
      .join('/');

    // Create new observable and load translations for current domain
    return new Observable<boolean>(observer => {
      this.translationService
        .loadTranslationsForDomain(domain)
        .subscribe(() => {
          observer.next(true);
          observer.complete();
        });
    });
  }
}
