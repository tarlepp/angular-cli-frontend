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
import { Config } from '../config/config';
import { Services } from './services/';
import { HttpLoaderFactory } from './translation/http-loader-factory';

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
        deps: [Http]
      }
    }),
  ],
  providers: [
    MdIconRegistry,
    Config,
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
