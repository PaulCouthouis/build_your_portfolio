import { TestBed } from '@angular/core/testing';

import { CheckLoggedGuard } from './check-logged.guard';

describe('CheckLoggedGuard', () => {
  let guard: CheckLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
