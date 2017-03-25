import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MdSidenav } from '@angular/material';

import { SidenavService } from './layout/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MdSidenav;

  /**
   * Constructor of the class.
   *
   * @param {TranslateService}  translate
   * @param {SidenavService}    sidenavService
   */
  public constructor(
    private translate: TranslateService,
    private sidenavService: SidenavService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  /**
   * OnInit life cycle hook
   */
  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}
