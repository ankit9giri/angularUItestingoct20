import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { CustomModalServiceService } from 'src/app/services/custom-modal-service.service';

@Component({
  selector: 'app-cell-capacity-view',
  templateUrl: './cell-capacity-view.component.html',
  styleUrls: ['./cell-capacity-view.component.scss']
})
export class CellCapacityViewComponent implements OnInit {

  constructor(private modalService: CustomModalServiceService, private alertService: AlertService) { }

  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  ngOnInit(): void {
  }

  openModal(modalName: string) {
    this.modalService.openModalFunction(modalName);
  }
}