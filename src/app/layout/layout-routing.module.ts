import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFooterRoutes, LayoutHeaderRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutFooterRoutes,
      ...LayoutHeaderRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
