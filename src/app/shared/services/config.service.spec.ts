import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('Service: /shared/services/config.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        {
          provide: 'Window',
          useValue: window
        },
      ]
    });
  });

  it('should create the service', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
