import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AnonymousGuard } from '../guards/';

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      AnonymousGuard,
    ],
  },
];
