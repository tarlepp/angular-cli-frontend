import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService, ProfileDataJwtInterface } from '../../services/';

@Injectable()
export class ProfileLocalResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {UserService} userService
   */
  public constructor(private userService: UserService) { }

  /**
   * Resolve method to fetch current user profile data from local storage.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   *
   * @returns {ProfileDataJwtInterface}
   */
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ProfileDataJwtInterface {
    return this.userService.profile();
  }
}
