import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';
import { SharedModule } from '../../shared/shared.module';

describe('Component: /layout/footer/footer.component.ts', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
      ],
      imports: [
        SharedModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/',
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
