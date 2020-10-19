import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBudgetDirectionComponent } from './link-budget-direction.component';

describe('LinkBudgetDirectionComponent', () => {
  let component: LinkBudgetDirectionComponent;
  let fixture: ComponentFixture<LinkBudgetDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBudgetDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBudgetDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
