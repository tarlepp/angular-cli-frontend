import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { JwtHelper, provideAuth } from 'angular2-jwt';
import { LocalStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs/Observable';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService, UserService } from '../services/';

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
        RouterTestingModule,
        TranslateModule.forRoot(),
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
    .compileComponents()
    .then(() => { });
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
