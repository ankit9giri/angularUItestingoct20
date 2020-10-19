import { TestBed } from '@angular/core/testing';

import { LinkBudgetMcsService } from './link-budget-mcs.service';

describe('LinkBudgetMcsService', () => {
  let service: LinkBudgetMcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBudgetMcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
