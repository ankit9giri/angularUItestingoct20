import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { LinkBudgetRange } from 'src/app/classes/link-budget-range';
import { Router } from '@angular/router';
import { LinkBudgetRangeService } from 'src/app/services/link-budget-range.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-link-budget-range',
  templateUrl: './link-budget-range.component.html',
  styleUrls: ['./link-budget-range.component.scss']
})
export class LinkBudgetRangeComponent implements OnInit {

  LinkBudgetRangeList: Array<any> = [];
  editField: string;

  constructor(private router: Router, private lbrservice: LinkBudgetRangeService, private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    this.reloadData();
  }

  hideModalFunction() {
    this.modalRef.close();
    // this.modalService.hideModalFunction();
  }

  addRow() {
    const Obj = { parameter: " ", value: 0, unit: " " };
    this.LinkBudgetRangeList.push(Obj);
    console.log(this.LinkBudgetRangeList)
  }

  reloadData() {
    this.lbrservice.getAllLinkBudgetRange().subscribe(
      data => {
        // console.log("status ", data, data['status']);
        this.LinkBudgetRangeList = JSON.parse(data);
        if (this.LinkBudgetRangeList.length == 0) {
          this.addRow();
        }
        // console.log("  this.LinkBudgetRangeList ", this.LinkBudgetRangeList)
      },
      error => console.log("errrrr ", error)
    );
  }

  // Funcitons for LinkBudgetRange
  deleteLinkBudgetRange(id: number) {
    this.lbrservice.deleteLinkBudgetRange(id)
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

  updateLinkBudgetRange(Obj: LinkBudgetRange) {
    // console.log("ObjObjObjObjObjObjObj", Obj);
    this.lbrservice.updateLinkBudgetRange(Obj).subscribe(data => {
      if (data['status'] == 201) {
        this.reloadData();
      }
    }, err => {
      console.log(err);
      return throwError(err.message);
    });
  }

  // Editable table event code

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.LinkBudgetRangeList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}

