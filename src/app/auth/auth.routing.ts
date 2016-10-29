import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routing';
import { ProfileRoutes } from './profile/profile.routing';

export const AuthRoutes: Routes = [
  ...LoginRoutes,
  ...ProfileRoutes,
];
