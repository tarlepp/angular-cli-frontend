import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent,
  ],
})

export class ProfileModule { }
