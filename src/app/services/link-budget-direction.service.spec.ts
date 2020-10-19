import { TestBed } from '@angular/core/testing';

import { LinkBudgetDirectionService } from './link-budget-direction.service';

describe('LinkBudgetDirectionService', () => {
  let service: LinkBudgetDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBudgetDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
