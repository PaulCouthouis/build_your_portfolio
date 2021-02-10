import { TestBed } from '@angular/core/testing';

import { CheckNotLoggedGuard } from './check-not-logged.guard';

describe('CheckNotLoggedGuard', () => {
  let guard: CheckNotLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNotLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
