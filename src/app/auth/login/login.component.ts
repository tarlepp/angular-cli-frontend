import { Component, ViewEncapsulation, Input, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdInput } from '@angular/material';

import { AuthService, UserService } from '../services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {
  @ViewChild('usernameControl')
  usernameControl: MdInput;

  @ViewChild('passwordControl')
  passwordControl: MdInput;

  @Input()
  username: string;

  @Input()
  password: string;

  public loading: boolean = false;

  /**
   * Constructor of the class.
   *
   * @param {AuthService}         authService
   * @param {UserService}         userService
   * @param {Router}              router
   */
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * On component init we want to set focus to username / email input.
   */
  ngOnInit(): void {
    // Reset form data
    this.username = '';
    this.password = '';

    // Remove loading
    this.loading = false;

    // Focus to username input
    this.usernameControl.focus();
  }

  /**
   * Method to make actual login
   *
   * @param {Event} event
   */
  public login(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.loading = true;

    this.authService
      .login({username: this.username, password: this.password})
      .subscribe(
        (data) => {
          // Store tokens for current user
          this.userService.storeTokens(data);

          // And redirect user to profile page
          this.router.navigate(['auth/profile']);

          this.loading = false;
        },
        (error) => {
          console.log('Login error',  error);

          // Clear local storage data
          this.userService.erase();

          this.ngOnInit();
        }
      )
    ;
  }
}
