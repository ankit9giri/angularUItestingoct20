import { TestBed } from '@angular/core/testing';

import { LinkBudgetRangeService } from './link-budget-range.service';

describe('LinkBudgetRangeService', () => {
  let service: LinkBudgetRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBudgetRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
