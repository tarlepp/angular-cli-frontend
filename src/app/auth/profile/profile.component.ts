import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService, UserService } from '../services/';
import { ProfileDataBackendInterface, ProfileDataJwtInterface } from '../services/interfaces/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public profileLocal: ProfileDataJwtInterface;
  public profileRemote$: Observable<ProfileDataBackendInterface>;

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
