import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe('Component: /app.component.ts', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        },
        TranslateService,
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
