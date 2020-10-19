import { TestBed } from '@angular/core/testing';

import { LinkBudgetModelService } from './link-budget-model.service';

describe('LinkBudgetModelService', () => {
  let service: LinkBudgetModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBudgetModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
