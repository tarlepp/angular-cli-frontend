import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AboutComponent } from './about.component';

describe('Component: /about/about.component.ts', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
      ],
      imports: [
        MaterialModule,
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
