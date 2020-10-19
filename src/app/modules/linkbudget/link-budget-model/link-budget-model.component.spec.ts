import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBudgetModelComponent } from './link-budget-model.component';

describe('LinkBudgetModelComponent', () => {
  let component: LinkBudgetModelComponent;
  let fixture: ComponentFixture<LinkBudgetModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBudgetModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBudgetModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
