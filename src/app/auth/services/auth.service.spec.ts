import { TestBed, inject } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { MdSnackBar, MaterialModule } from '@angular/material';
import { AuthHttp, provideAuth, JwtHelper } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';

import { AuthService, UserService } from './';
import { MessageService, ConfigService } from '../../shared/services/';

describe('Service: /auth/services/auth.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        MaterialModule,
      ],
      providers: [
        AuthService,
        UserService,
        MessageService,
        ConfigService,
        Http,
        AuthHttp,
        ConnectionBackend,
        JwtHelper,
        MdSnackBar,
        LocalStorageService,
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
        {
          provide: 'Window',
          useValue: window
        },
      ],
    })
    .compileComponents()
    .then(() => { });
  });

  it('should create the service', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
