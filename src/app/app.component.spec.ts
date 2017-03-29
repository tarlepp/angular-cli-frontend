import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SidenavService } from './layout/sidenav/sidenav.service';

describe('Component: /app.component.ts', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        },
        SidenavService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
