import { TestBed } from '@angular/core/testing';

import { FreeAgencyService } from './free-agency.service';

describe('FreeAgencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeAgencyService = TestBed.get(FreeAgencyService);
    expect(service).toBeTruthy();
  });
});
