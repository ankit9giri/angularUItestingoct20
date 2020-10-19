import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkBudgetDirectionService } from 'src/app/services/link-budget-direction.service';
import { throwError } from 'rxjs';
import { LinkBudgetDirection } from 'src/app/classes/link-budget-direction';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-link-budget-direction',
  templateUrl: './link-budget-direction.component.html',
  styleUrls: ['./link-budget-direction.component.scss']
})
export class LinkBudgetDirectionComponent implements OnInit {

  LinkBudgetDirectionList: Array<any> = [];
  editField: string;
  updatefun: any;
  constructor(private router: Router, private lbrservice: LinkBudgetDirectionService, private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    this.reloadData();
  }

  hideModalFunction() {
    this.modalRef.close();
    // this.modalService.hideModalFunction();
  }

  addRow() {
    const Obj = { parameter: " ", enb: 0, ue: 0, unit: " " };
    this.LinkBudgetDirectionList.push(Obj);
    console.log(this.LinkBudgetDirectionList)
  }

  reloadData() {
    this.lbrservice.getAllLinkBudgetDirection().subscribe(
      data => {
        // console.log("status ", data, data['status']);
        this.LinkBudgetDirectionList = JSON.parse(data);
        if (this.LinkBudgetDirectionList.length == 0) {
          this.addRow();
        }
        // console.log("  this.LinkBudgetDirectionList ", this.LinkBudgetDirectionList)
      },
      error => console.log("errrrr ", error)
    );
  }

  // Funcitons for LinkBudgetDirection
  deleteLinkBudgetDirection(id: number) {
    this.lbrservice.deleteLinkBudgetDirection(id)
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

  updateLinkBudgetDirection(Obj: LinkBudgetDirection) {
    // console.log("ObjObjObjObjObjObjObj", Obj);
    this.updatefun = this.lbrservice.updateLinkBudgetDirection(Obj).subscribe(data => {
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
    this.LinkBudgetDirectionList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
    // if (id) {
    //   console.log("id ", typeof id)
    //   document.getElementById(id + "").setAttribute("disabled", "!disabled");
    // }
  }

}

