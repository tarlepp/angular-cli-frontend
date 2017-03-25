import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    SidenavComponent,
  ],
  providers: [
    SidenavService,
  ],
})

export class SidenavModule { }
