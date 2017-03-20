import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/observable/throw';
import 'rxjs/operator/map';

import { UserService } from './user.service';
import { ProfileDataBackendInterface, TokenDataInterface } from './interfaces/';
import { MessageService, ConfigService } from '../../shared/services/';

@Injectable()
export class AuthService {
  /**
   * Constructor of the class.
   *
   * @param {Http}            http
   * @param {AuthHttp}        authHttp
   * @param {Router}          router
   * @param {UserService}     userService
   * @param {MessageService}  messageService
   * @param {ConfigService}   configService
   */
  public constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
    private configService: ConfigService
  ) { }

  /**
   * Method to make login request to backend with given credentials.
   *
   * @param credentials
   * @returns {Observable<TokenDataInterface>}
   */
  public login(credentials): Observable<TokenDataInterface> {
    return this.http
      .post(`${this.configService.getApiUrl()}auth/getToken`, credentials)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Invalid credentials'))
    ;
  }

  /**
   * Method to logout current user
   *
   * @returns {Promise<boolean>}
   */
  public logout() {
    this.userService.erase();

    this.messageService.simple('Logged out successfully');

    return this.router.navigate(['auth/login']);
  }

  /**
   * Method to fetch user profile data from backend.
   *
   * @returns {Observable<ProfileDataBackendInterface>}
   */
  public profile(): Observable<ProfileDataBackendInterface> {
    return this.authHttp
      .get(`${this.configService.getApiUrl()}auth/profile`)
      .map((response: Response) => response.json())
      .catch((error: any) => {
        this.logout();

        return Observable.throw(error.json().message || 'Invalid credentials');
      })
    ;
  }
}
