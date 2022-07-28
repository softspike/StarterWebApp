import { TestBed } from '@angular/core/testing';

import { GenericValidatorService } from './generic-validator.service';

describe('GenericValidatorService', () => {
  let service: GenericValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
