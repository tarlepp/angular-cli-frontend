import { TestBed, inject } from '@angular/core/testing';

import { TranslationService } from './translation.service';

describe('Service: /shared/services/translation.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService]
    });
  });

  it('should create the service', inject([TranslationService], (service: TranslationService) => {
    expect(service).toBeTruthy();
  }));
});
