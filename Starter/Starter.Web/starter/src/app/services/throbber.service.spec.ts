import { TestBed } from '@angular/core/testing';

import { ThrobberService } from './throbber.service';

describe('ThrobberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThrobberService = TestBed.get(ThrobberService);
    expect(service).toBeTruthy();
  });
});
