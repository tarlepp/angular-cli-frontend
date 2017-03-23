import { Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LocaleResolver } from './resolves/locale.resolver';

export const LayoutHeaderRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    outlet: 'header',
    resolve: {
      locales: LocaleResolver,
    },
  },
];
