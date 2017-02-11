import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { Directives } from './directives/';
import { Config } from '../config/config';

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
    MaterialModule.forRoot(),
    FlexLayoutModule,
    MomentModule,
    Ng2Webstorage,
  ],
  providers: [
    MdIconRegistry,
    Config,
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
    ...Directives,
  ],
})

export class SharedModule { }
