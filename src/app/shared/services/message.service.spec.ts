import { TestBed, inject } from '@angular/core/testing';
import { MdSnackBarModule } from '@angular/material';

import { MessageService } from './message.service';

describe('Service: /shared/services/message.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MdSnackBarModule,
      ],
      providers: [
        MessageService,
      ],
    });
  });

  it('should create the service', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
