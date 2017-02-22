import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  exports: [
    FooterModule,
    HeaderModule,
  ],
})

export class LayoutModule { }
