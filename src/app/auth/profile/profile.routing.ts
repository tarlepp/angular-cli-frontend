import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { AuthenticationGuard } from '../guards/';
import { ProfileLocalResolver, ProfileRemoteResolver } from './resolves/';

export const ProfileRoutes: Routes = [
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [
      AuthenticationGuard,
    ],
    resolve: {
      profileLocal: ProfileLocalResolver,
      profileRemote: ProfileRemoteResolver,
    },
  },
];
