import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { JwtHelper } from 'angular2-jwt';

import { AuthenticationGuard } from './authentication.guard';
import { UserService } from '../services/user.service';

class StubLocalStorageService {
  private data = {};

  store(key: string, value: any): void {
    this.data[key] = value;
  }

  retrieve(key: string): any {
    return this.data[key];
  }
}

describe('Guard: /auth/guards/authentication.guard.ts', () => {
  const route: any = {};
  const state: any = {};
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.EkN-DOsnsuRjRO6BxXemmJDm3HbxrbRzXglbN2S4sOkopdU4IsDxTI8jO19W_A4K8ZPJijNLis4EZsHeY559a4DFOd50_OqgHGuERTqYZyuhtF39yxJPAjUESwxk2J5k_4zM3O-vtd1Ghyo4IbqKKSy6J9mTniYJPenn5-HIirE';

  beforeEach(() => {
    const fakeRouter = {
      navigate: (commands: any[]) => commands,
    };

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        {
          provide: LocalStorageService,
          useClass: StubLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
        UserService,
        JwtHelper,
      ],
    });
  });

  it('should create the guard', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));

  describe('When user is not logged in', () => {
    it('should return false', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
      expect(guard.canActivate(route, state)).not.toBeTruthy();
    }));

    it('should redirect user to login page', inject(
      [
        AuthenticationGuard,
        Router,
      ],
      (
        guard: AuthenticationGuard,
        router: Router
      ) => {
        spyOn(router, 'navigate');

        guard.canActivate(route, state);

        expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
      })
    );
  });

  describe('When user is logged in', () => {
    it('should return true', inject(
      [
        AuthenticationGuard,
        LocalStorageService,
      ],
      (
        guard: AuthenticationGuard,
        storage: LocalStorageService
      ) => {
        storage.store('token', token);

        expect(guard.canActivate(route, state)).toBeTruthy();
      })
    );
  });
});
