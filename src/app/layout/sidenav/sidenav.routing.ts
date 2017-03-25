import { Routes } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

export const LayoutSidenavRoutes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    outlet: 'sidenav',
  },
];
