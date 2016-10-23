import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routing';

export const AuthRoutes: Routes = [
  ...LoginRoutes,
];