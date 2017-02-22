import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
