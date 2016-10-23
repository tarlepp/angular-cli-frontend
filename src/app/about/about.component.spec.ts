import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AboutComponent } from './about.component';

describe('Component: /about/about.component.ts', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
    });

    fixture = TestBed.createComponent(AboutComponent);
  });

  it('should create the component', () => {
    let component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  });
});
