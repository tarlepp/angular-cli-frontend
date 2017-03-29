import { Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LocaleResolver } from './resolves/locale.resolver';
import { TranslationGuard } from '../../shared/translation/';

export const LayoutHeaderRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header',
    resolve: {
      locales: LocaleResolver,
    },
    canActivate: [
      TranslationGuard,
    ],
    data: {
      translation: {
        domain: 'layout',
        common: true,
      },
    },
  },
];
