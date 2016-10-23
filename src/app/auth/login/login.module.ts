import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
})

export class LoginModule { }
