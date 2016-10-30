import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../services/user.service';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
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
   * Purpose of this guard is check if current user has not given nick for chat. If nick is found from local storage
   * user will be allowed to enter chat. If nick isn't found from local storage user is redirected nick entry route.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {boolean}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.profile()) {
      return true;
    }

    this.router.navigate(['auth/login']);

    return false;
  }
}
