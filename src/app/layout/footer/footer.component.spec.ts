import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { FooterComponent } from './footer.component';

describe('Component: /layout/footer/footer.component.ts', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
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
