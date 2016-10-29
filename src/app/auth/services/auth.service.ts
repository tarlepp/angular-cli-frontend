import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs';

import { Config } from '../../config/config';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  /**
   * Constructor of the class.
   *
   * @param {Http}        http
   * @param {AuthHttp}    authHttp
   * @param {Router}      router
   * @param {UserService} userService
   */
  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * Method to make login request to backend with given credentials.
   *
   * @param credentials
   * @returns {Observable<R>}
   */
  public login(credentials) {
    return this.http
      .post(`${Config.API.URL}auth/getToken`, credentials)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error.json().message || 'Invalid credentials');
      })
    ;
  }

  /**
   * Method to fetch user profile data from backend.
   *
   * @returns {Observable<R>}
   */
  public profile() {
    return this.authHttp
      .get(`${Config.API.URL}auth/profile`)
      .map((response: Response) => response.json())
      .catch((error: any) => {
        console.log('Cannot get user profile', error);

        this.userService.erase();

        return this.router.navigate(['auth/login']);
      })
    ;
  }
}
