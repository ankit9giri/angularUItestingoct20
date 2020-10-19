import { TestBed } from '@angular/core/testing';

import { GeneralParameterService } from './general-parameter.service';

describe('GeneralParameterService', () => {
  let service: GeneralParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
