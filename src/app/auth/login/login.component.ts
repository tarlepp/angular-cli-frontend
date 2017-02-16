import { Component, ViewEncapsulation, Input, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, UserService } from '../services/';
import { MessageService } from '../../shared/services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('usernameControl')
  usernameControl: ElementRef;

  @ViewChild('passwordControl')
  passwordControl: ElementRef;

  @Input()
  username: string;

  @Input()
  password: string;

  public loading = false;

  /**
   * Constructor of the class.
   *
   * @param {AuthService}     authService
   * @param {UserService}     userService
   * @param {MessageService}  messageService
   * @param {Router}          router
   */
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  // On component init we want to set focus to username / email input.
  ngOnInit(): void {
    // Reset form data
    this.username = '';
    this.password = '';

    // Remove loading
    this.loading = false;
  }

  // Set focus to username / email input
  ngAfterViewInit() {
    setTimeout(() => {
      this.usernameControl.nativeElement.focus();
    }, 500);
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

          // Fetch user profile from token
          const profile = this.userService.profile();

          this.loading = false;

          // Attach message
          this.messageService.simple(`Welcome ${profile.surname}, ${profile.firstname}!`);

          // And redirect user to profile page
          return this.router.navigate(['auth/profile']);
        },
        (error) => {
          this.messageService.simple(error.message);

          // Clear local storage data
          this.userService.erase();

          this.ngOnInit();
        }
      )
    ;
  }
}
