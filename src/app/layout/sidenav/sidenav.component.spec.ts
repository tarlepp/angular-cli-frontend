import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthHttp, JwtHelper, provideAuth } from 'angular2-jwt';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../auth/services/user.service';
import { LocalStorageService } from 'ng2-webstorage';
import { APP_BASE_HREF } from '@angular/common';
import { SidenavService } from './sidenav.service';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

describe('Component: /layout/sidenav/sidenav.component.ts', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        AuthHttp,
        AuthService,
        UserService,
        LocalStorageService,
        JwtHelper,
        provideAuth({
          tokenGetter: (() => {
            const storage = new LocalStorageService();

            return storage.retrieve('token');
          }),
        }),
        {
          provide: APP_BASE_HREF,
          useValue : '/',
        },
        SidenavService,
        TranslateService,
      ]
    })
    .compileComponents()
    .then(() => { });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
