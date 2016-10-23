import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core/src/metadata/ng_module';

import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
  ],
  exports: [
    LoginModule,
  ],
})

export class AuthModule { }
