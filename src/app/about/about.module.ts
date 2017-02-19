import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [
    AboutComponent,
  ],
})

export class AboutModule { }
