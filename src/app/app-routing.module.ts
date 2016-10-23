import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutRoutes } from './about/';
import { LayoutRoutes } from './layout/';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  ...AboutRoutes,
  ...LayoutRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
