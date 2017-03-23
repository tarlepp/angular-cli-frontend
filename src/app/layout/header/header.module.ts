import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent, LocaleResolver } from './index';

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
  providers: [
    LocaleResolver,
  ]
})

export class HeaderModule { }
