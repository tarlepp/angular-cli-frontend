import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileLocalResolver, ProfileRemoteResolver } from './resolves/';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    ProfileLocalResolver,
    ProfileRemoteResolver,
  ],
  exports: [
    ProfileComponent,
  ],
})

export class ProfileModule { }
