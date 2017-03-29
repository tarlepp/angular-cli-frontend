import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { provideAuth, JwtHelper } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';

import { LoginComponent } from './login.component';
import { AuthService, UserService } from '../services/';
import { SharedModule } from '../../shared/shared.module';

describe('Component: /auth/login/login.component.ts', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
      ],
      providers: [
        AuthService,
        UserService,
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
