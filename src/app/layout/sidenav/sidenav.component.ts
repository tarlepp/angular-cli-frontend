import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { AuthService, UserService } from '../../auth/services/';
import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  public user: any;

  /**
   * Constructor of the class.
   *
   * @param {AuthService}         authService
   * @param {Router}              router
   * @param {LocalStorageService} localStorage
   * @param {UserService}         userService
   * @param {SidenavService}      sidenavService
   */
  public constructor(
    public authService: AuthService,
    private router: Router,
    private localStorage: LocalStorageService,
    private userService: UserService,
    private sidenavService: SidenavService
  ) { }

  /**
   * OnInit life cycle hook.
   *
   * Within this we need to do following things:
   *  1) Initialize current user
   *  2) Subscribe to local storage token
   *  3) Subscribe to router events
   */
  public ngOnInit(): void {
    this.initializeUser();

    this.localStorage
      .observe('token')
      .subscribe(() => { this.initializeUser(); });

    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => { });
        }
      });
  }

  /**
   * Helper method to fetch user profile data.
   */
  private initializeUser(): void {
    this.user = this.userService.profile();
  }
}
