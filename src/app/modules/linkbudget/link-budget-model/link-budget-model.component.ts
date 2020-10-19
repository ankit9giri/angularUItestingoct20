import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkBudgetModelService } from 'src/app/services/link-budget-model.service';
import { throwError } from 'rxjs';
import { LinkBudgetModel } from 'src/app/classes/link-budget-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-link-budget-model',
  templateUrl: './link-budget-model.component.html',
  styleUrls: ['./link-budget-model.component.scss']
})
export class LinkBudgetModelComponent implements OnInit {

  LinkBudgetModelList: Array<any> = [];
  editField: string;
  updatefun: any;

  constructor(private router: Router, private lbrservice: LinkBudgetModelService, private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    this.reloadData();
  }

  hideModalFunction() {
    this.modalRef.close();
    // this.modalService.hideModalFunction();
  }

  addRow() {
    const Obj = { parameter: " ", urban: 0, suburban: 0, rural: 0, unit: " " };
    this.LinkBudgetModelList.push(Obj);
    console.log(this.LinkBudgetModelList)
  }

  reloadData() {
    this.lbrservice.getAllLinkBudgetModel().subscribe(
      data => {
        // console.log("status ", data, data['status']);
        this.LinkBudgetModelList = JSON.parse(data);
        if (this.LinkBudgetModelList.length == 0) {
          this.addRow();
        }
        // console.log("  this.LinkBudgetModelList ", this.LinkBudgetModelList)
      },
      error => console.log("errrrr ", error)
    );
  }


  // Funcitons for LinkBudgetModel
  deleteLinkBudgetModel(id: number) {
    this.lbrservice.deleteLinkBudgetModel(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        err => {
          console.log(err);
          return throwError(err.message);
        });
  }

  updateLinkBudgetModel(Obj: LinkBudgetModel) {
    // console.log("ObjObjObjObjObjObjObj", Obj);
    this.updatefun = this.lbrservice.updateLinkBudgetModel(Obj).subscribe(data => {
      if (data['status'] == 201) {
        this.reloadData();
      }
    }, err => {
      console.log(err);
      return throwError(err.message);
    });
    // this.updatefun.unsubscribe();
  }

  // Editable table event code

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.LinkBudgetModelList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    // if (id) {
    //   console.log("id ", typeof id)
    //   document.getElementById(id + "").setAttribute("disabled", "!disabled");
    // }
  }

}

