import { TestBed } from '@angular/core/testing';

import { UsserService } from './usser.service';

describe('UsserService', () => {
  let service: UsserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
