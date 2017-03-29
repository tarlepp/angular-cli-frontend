import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent, AboutListComponent } from './';
import { TranslateModule } from '@ngx-translate/core';

describe('Component: /about/about.component.ts', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        AboutListComponent,
      ],
      imports: [
        SharedModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
