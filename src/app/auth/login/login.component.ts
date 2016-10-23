import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor() { }

  doLogin(event: Event) {
    console.log('TODO implement actual login');
    console.log(this.username, this.password, event);
  }
}
