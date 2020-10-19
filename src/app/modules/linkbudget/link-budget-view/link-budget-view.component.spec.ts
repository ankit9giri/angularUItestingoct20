import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBudgetViewComponent } from './link-budget-view.component';

describe('LinkBudgetViewComponent', () => {
  let component: LinkBudgetViewComponent;
  let fixture: ComponentFixture<LinkBudgetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBudgetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBudgetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
