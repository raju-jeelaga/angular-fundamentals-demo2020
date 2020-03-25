import { TestBed } from '@angular/core/testing';

import { CountingServiceService } from './counting-service.service';

describe('CountingServiceService', () => {
  let service: CountingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
