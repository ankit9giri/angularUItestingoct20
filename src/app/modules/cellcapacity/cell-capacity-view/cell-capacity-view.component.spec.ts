import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCapacityViewComponent } from './cell-capacity-view.component';

describe('CellCapacityViewComponent', () => {
  let component: CellCapacityViewComponent;
  let fixture: ComponentFixture<CellCapacityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellCapacityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCapacityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
