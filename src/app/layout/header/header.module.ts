import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule { }
