import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { AuthService, UserService } from '../../auth/services/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public user: any;

  /**
   * Constructor of the class.
   *
   * @param {AuthService}         authService
   * @param {LocalStorageService} localStorage
   * @param {UserService}         userService
   */
  constructor(
    public authService: AuthService,
    private localStorage: LocalStorageService,
    private userService: UserService,
  ) { }

  /**
   * On component init we need to store current user and make a subscription for token changes so that we
   * get user value to update within login / logout states.
   */
  public ngOnInit():  void {
    this.initializeUser();

    this.localStorage
      .observe('token')
      .subscribe(() => { this.initializeUser(); });
  }

  /**
   * Helper method to fetch user profile data.
   */
  private initializeUser(): void {
    this.user = this.userService.profile();
  }
}
