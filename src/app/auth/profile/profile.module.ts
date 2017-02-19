import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileLocalResolver, ProfileRemoteResolver } from './resolves/';

@NgModule({
  imports: [
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
