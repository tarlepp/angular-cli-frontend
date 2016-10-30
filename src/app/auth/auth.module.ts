import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAuth, JwtHelper } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';

import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { AuthenticationGuard } from './guards/';
import { AuthService, UserService } from './services/';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    ProfileModule,
  ],
  providers: [
    provideAuth({
      tokenGetter: (() => {
        let storage = new LocalStorageService();

        return storage.retrieve('token');
      }),
    }),
    JwtHelper,
    AuthService,
    UserService,
    AuthenticationGuard,
  ],
  exports: [
    LoginModule,
  ],
  declarations: [],
})

export class AuthModule { }
