import { TestBed } from '@angular/core/testing';

import { LudoServiceService } from './ludo-service.service';

describe('LudoServiceService', () => {
  let service: LudoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LudoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
