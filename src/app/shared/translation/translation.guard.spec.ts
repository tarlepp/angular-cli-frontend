import { TestBed, async, inject } from '@angular/core/testing';

import { TranslationGuard } from './translation.guard';

describe('Guard: /shared/translation/translation.service.spec.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationGuard]
    });
  });

  it('should create the guard', inject([TranslationGuard], (guard: TranslationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
