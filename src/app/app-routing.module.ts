import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutRoutes } from './about/';
import { AuthRoutes } from './auth/';
import { LayoutRoutes } from './layout/';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  ...AboutRoutes,
  ...AuthRoutes,
  ...LayoutRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
