import { TestBed } from '@angular/core/testing';

import { ViaTrackSerService } from './via-track-ser.service';

describe('ViaTrackSerService', () => {
  let service: ViaTrackSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaTrackSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
