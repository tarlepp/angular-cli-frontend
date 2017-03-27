import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './index';
import { TranslationGuard } from '../shared/translation/';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [
          TranslationGuard,
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class AboutRoutingModule { }
