import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AboutListComponent } from './index';

describe('Component: /about/about-list.component.ts', () => {
  let component: AboutListComponent;
  let fixture: ComponentFixture<AboutListComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
        declarations: [
          AboutListComponent,
        ],
        imports: [
          MaterialModule,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
