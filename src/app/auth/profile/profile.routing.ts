import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { AuthenticationGuard } from '../guards/';
import { TranslationGuard } from '../../shared/translation/';
import { ProfileLocalResolver, ProfileRemoteResolver } from './resolves/';

export const ProfileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      AuthenticationGuard,
      TranslationGuard
    ],
    resolve: {
      profileLocal: ProfileLocalResolver,
      profileRemote: ProfileRemoteResolver,
    },
  },
];
