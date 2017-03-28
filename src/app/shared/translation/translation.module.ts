import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { HttpLoaderFactory } from './http-loader-factory';
import { ConfigService } from '../services/config.service';
import { TranslationGuard } from './guards/translation.guard';
import { TranslationService } from './services/translation.service';
import { TranslationCacheService } from './services/translation-cache.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http, ConfigService, TranslationCacheService],
      },
    }),
  ],
  providers: [
    TranslationGuard,
    TranslateService,
    TranslationService,
    TranslationCacheService,
  ],
  exports: [
    TranslateModule,
  ]
})

export class TranslationModule { }
