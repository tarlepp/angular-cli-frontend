import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../services/user.service';

/**
 * This class implements a guard for routes that require that user is not authenticated.
 */
@Injectable()
export class AnonymousGuard implements CanActivate {
  /**
   * Constructor of the class.
   *
   * @param {UserService} userService
   * @param {Router}      router
   */
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * Purpose of this guard is check that current user has not been authenticated to application. If user is
   * authenticated he/she is redirected to profile page.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {boolean}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.profile()) {
      return true;
    }

    this.router.navigate(['auth/profile']);

    return false;
  }
}
