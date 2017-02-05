import { TestBed, inject } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AuthHttp, provideAuth, JwtHelper } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';

import { AuthService, UserService } from './';

describe('Service: /auth/services/auth.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        AuthService,
        UserService,
        Http,
        AuthHttp,
        ConnectionBackend,
        JwtHelper,
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
      ],
    });
  });

  it('should create the service', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
