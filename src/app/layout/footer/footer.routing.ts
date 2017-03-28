import { Routes } from '@angular/router';

import { FooterComponent } from './footer.component';
import { TranslationGuard } from '../../shared/translation/';

export const LayoutFooterRoutes: Routes = [
  {
    path: '',
    component: FooterComponent,
    outlet: 'footer',
    canActivate: [
      TranslationGuard,
    ],
    data: {
      translation: {
        domain: 'layout',
        common: true,
      }
    }
  },
];
