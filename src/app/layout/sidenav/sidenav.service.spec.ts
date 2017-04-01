import { TestBed, inject } from '@angular/core/testing';

import { SidenavService } from './sidenav.service';

describe('Service: /layout/sidenav/sidenav.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavService]
    });
  });

  it('should create the service', inject([SidenavService], (service: SidenavService) => {
    expect(service).toBeTruthy();
  }));
});
