import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBudgetRangeComponent } from './link-budget-range.component';

describe('LinkBudgetRangeComponent', () => {
  let component: LinkBudgetRangeComponent;
  let fixture: ComponentFixture<LinkBudgetRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBudgetRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBudgetRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
