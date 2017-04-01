import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LocalStorageService } from 'ng2-webstorage';
import { AuthHttp, provideAuth, JwtHelper } from 'angular2-jwt';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService, UserService } from '../../auth/services/';
import { SidenavService } from '../sidenav/sidenav.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('Component: /layout/header/header.component.ts', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
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
      ],
    })
    .compileComponents()
    .then(() => { });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
