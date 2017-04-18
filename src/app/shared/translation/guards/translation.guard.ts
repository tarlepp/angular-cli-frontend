import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TranslationService } from '../services/translation.service';

@Injectable()
export class TranslationGuard implements CanActivate {
  /**
   * Constructor of the class
   *
   * @param {TranslationService}  translationService
   */
  public constructor(private translationService: TranslationService) { }

  /**
   * Purpose of this guard is to loadTranslations current route possible translations so that we can use those easily. Usage
   * examples:
   *
   *  RouterModule.forChild([
   *    {
   *      path: 'foo',
   *      component: FooComponent,
   *      canActivate: [
   *        TranslationGuard,
   *      ],
   *    },
   *  ]);
   *
   * Above will try to loadTranslations locales from path 'foo/en.json'
   *
   *  RouterModule.forChild([
   *    {
   *      path: '',
   *      component: FooBarComponent,
   *      canActivate: [
   *        TranslationGuard,
   *      ],
   *      data: {
   *        translation: {
   *          domain: 'layout',
   *          common: true|false, // Optional
   *        },
   *      },
   *    },
   *  ]);
   *
   * Above will try to loadTranslations translations from path 'layout/en.json'
   *
   * TODO don't store data.translation.domain data to translate normal cache
   * TODO resolve possible cache problems common versus not common
   *
   * @param {ActivatedRouteSnapshot}  next
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<boolean>}
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let domain: string;
    let common = false;

    // Route data contains translation meta data
    if (next.data.hasOwnProperty('translation')) {
      domain = next.data['translation'].hasOwnProperty('domain') ? next.data['translation']['domain'] : false;
      common = next.data['translation'].hasOwnProperty('common') ? next.data['translation']['common'] : false;
    } else { // Otherwise determine current domain name
      domain = next.pathFromRoot
        .filter((routeSnapshot: ActivatedRouteSnapshot) => {
          return routeSnapshot.routeConfig !== null;
        })
        .map((routeSnapshot: ActivatedRouteSnapshot) => {
          return routeSnapshot.routeConfig.path;
        })
        .join('/');
    }

    return new Observable<boolean>(observer => {
      this.translationService
        .load(domain, common)
        .subscribe(() => {
          observer.next(true);
          observer.complete();
        });
    });
  }
}
