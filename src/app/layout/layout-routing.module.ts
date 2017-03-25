import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFooterRoutes, LayoutHeaderRoutes, LayoutSidenavRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutFooterRoutes,
      ...LayoutHeaderRoutes,
      ...LayoutSidenavRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
