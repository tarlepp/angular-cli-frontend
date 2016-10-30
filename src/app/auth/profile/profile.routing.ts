import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { AuthenticationGuard } from '../guards/';

export const ProfileRoutes: Routes = [
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [
      AuthenticationGuard,
    ],
  },
];
