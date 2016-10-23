import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    AboutModule,
    AuthModule,
    LayoutModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
