import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from '../services/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  private profileLocal: any;
  private profileRemote$: any;

  /**
   * Constructor of the class.
   *
   * @param {AuthService} authService
   * @param {UserService} userService
   */
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  /**
   * On init we want to fetch current user profile from local storage and backend, so that we can show those on the
   * template. Note that backend side data is observable on this case.
   */
  ngOnInit(): void {
    this.profileLocal = this.userService.profile();
    this.profileRemote$ = this.authService.profile();
  }
}
