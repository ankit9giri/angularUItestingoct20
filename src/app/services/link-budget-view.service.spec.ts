import { TestBed } from '@angular/core/testing';

import { LinkBudgetViewService } from './link-budget-view.service';

describe('LinkBudgetViewService', () => {
  let service: LinkBudgetViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBudgetViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
