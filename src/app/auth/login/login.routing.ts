import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AnonymousGuard } from '../guards/';
import { TranslationGuard } from '../../shared/translation/';

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      AnonymousGuard,
      TranslationGuard,
    ],
  },
];
