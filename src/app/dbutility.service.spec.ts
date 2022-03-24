import { TestBed } from '@angular/core/testing';

import { DbutilityService } from './dbutility.service';

describe('DbutilityService', () => {
  let service: DbutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
