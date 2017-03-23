import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    LayoutRoutingModule,
  ],
})

export class LayoutModule { }
