import { TestBed, inject} from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

import { AnonymousGuard } from './anonymous.guard';
import { UserService } from '../services/user.service';
import { JwtHelper } from 'angular2-jwt';

class StubLocalStorageService {
  private data = {};

  store(key: string, value: any): void {
    this.data[key] = value;
  }

  retrieve(key: string): any {
    return this.data[key];
  }
}

describe('Guard: /auth/guards/anonymous.guard.ts', () => {
  const route: any = {};
  const state: any = {};
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.EkN-DOsnsuRjRO6BxXemmJDm3HbxrbRzXglbN2S4sOkopdU4IsDxTI8jO19W_A4K8ZPJijNLis4EZsHeY559a4DFOd50_OqgHGuERTqYZyuhtF39yxJPAjUESwxk2J5k_4zM3O-vtd1Ghyo4IbqKKSy6J9mTniYJPenn5-HIirE';

  beforeEach(() => {
    const fakeRouter = {
      navigate: (commands: any[]) => commands,
    };

    TestBed.configureTestingModule({
      providers: [
        AnonymousGuard,
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

  it('should create the guard', inject([AnonymousGuard], (guard: AnonymousGuard) => {
    expect(guard).toBeTruthy();
  }));

  describe('When user is not logged in', () => {
    it('should return true', inject([AnonymousGuard], (guard: AnonymousGuard) => {
      expect(guard.canActivate(route, state)).toBeTruthy();
    }));
  });

  describe('When user is logged in', () => {
    it('should return false', inject(
      [AnonymousGuard, LocalStorageService],
      (
        guard: AnonymousGuard,
        storage: LocalStorageService
      ) => {
        storage.store('token', token);

        expect(guard.canActivate(route, state)).not.toBeTruthy();
      })
    );

    it('should redirect user', inject(
      [AnonymousGuard, LocalStorageService, Router],
      (
        guard: AnonymousGuard,
        storage: LocalStorageService,
        router: Router
      ) => {
        storage.store('token', token);

        spyOn(router, 'navigate');

        guard.canActivate(route, state);

        expect(router.navigate).toHaveBeenCalledWith(['auth/profile']);
      })
    );
  });
});
