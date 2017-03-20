import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import 'hammerjs';

import { Directives } from './directives/';
import { Services } from './services/';
import { HttpLoaderFactory } from './translation/http-loader-factory';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    Ng2Webstorage,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http, ConfigService]
      }
    }),
  ],
  providers: [
    {
      provide: 'Window',
      useValue: window
    },
    MdIconRegistry,
    ...Services,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    Ng2Webstorage,
    TranslateModule,
    ...Directives,
  ],
})

export class SharedModule { }
