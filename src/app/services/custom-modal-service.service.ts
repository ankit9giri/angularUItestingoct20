import { Injectable } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinkBudgetRangeComponent } from '../modules/linkbudget/link-budget-range/link-budget-range.component';
import { LinkBudgetDirectionComponent } from '../modules/linkbudget/link-budget-direction/link-budget-direction.component';
import { LinkBudgetMcsComponent } from '../modules/linkbudget/link-budget-mcs/link-budget-mcs.component';
import { LinkBudgetModelComponent } from '../modules/linkbudget/link-budget-model/link-budget-model.component';
import { GeneralParametersComponent } from '../modules/cellcapacity/general-parameters/general-parameters.component';

@Injectable({
  providedIn: 'root'
})
export class CustomModalServiceService {

  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalFunction(modalName: string) {

    switch (modalName) {
      case 'range':
        // do any execution before opening child component
        this.modalRef = this.modalService.open(LinkBudgetRangeComponent, { size: 'lg' });
        // this.modalRef.componentInstance.testData = 'test';
        break;
      case 'direction':
        // do any execution before opening child component
        this.modalRef = this.modalService.open(LinkBudgetDirectionComponent, { size: 'lg' });
        break;
      case 'mcs':
        // do any execution before opening child component
        this.modalRef = this.modalService.open(LinkBudgetMcsComponent, { size: 'xl' });
        break;
      case 'model':
        // do any execution before opening child component
        this.modalRef = this.modalService.open(LinkBudgetModelComponent, { size: 'lg' });
        break;
      case 'generalparameters':
        this.modalRef = this.modalService.open(GeneralParametersComponent, { size: 'lg' });
        break;
      default:
      // do nothing
    }
  }

}