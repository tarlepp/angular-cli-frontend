import { TestBed,  inject } from '@angular/core/testing';
import { LocalStorageService } from 'ng2-webstorage';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from './user.service';

describe('Service: /auth/services/user.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        LocalStorageService,
        JwtHelper,
      ],
    });
  });

  it('should create the service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
