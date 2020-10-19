import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBudgetMcsComponent } from './link-budget-mcs.component';

describe('LinkBudgetMcsComponent', () => {
  let component: LinkBudgetMcsComponent;
  let fixture: ComponentFixture<LinkBudgetMcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBudgetMcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBudgetMcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
