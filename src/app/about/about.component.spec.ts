import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent, AboutListComponent } from './';

describe('Component: /about/about.component.ts', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        AboutListComponent,
      ],
      imports: [
        SharedModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents()
    .then(() => { });
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
