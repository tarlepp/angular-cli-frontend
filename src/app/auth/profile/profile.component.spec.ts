import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { JwtHelper, provideAuth } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';

class StubAuthService {
  // TODO, this is not the way this base test should be handled...
  profile() {
    return Observable.of([]);
  }
}

describe('Component: /auth/profile/profile.component.ts', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: AuthService,
          useClass: StubAuthService,
        },
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
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
