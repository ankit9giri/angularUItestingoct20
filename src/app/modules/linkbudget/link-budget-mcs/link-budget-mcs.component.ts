import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { LinkBudgetMcs } from 'src/app/classes/link-budget-mcs';
import { LinkBudgetMcsService } from 'src/app/services/link-budget-mcs.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-link-budget-mcs',
  templateUrl: './link-budget-mcs.component.html',
  styleUrls: ['./link-budget-mcs.component.scss']
})
export class LinkBudgetMcsComponent implements OnInit {

  LinkBudgetMcsList: Array<any> = [];
  editField: string;

  headerArr: any = ['parameter', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];

  LinkBudgetMcsListtemp: Array<any> = [{
    parameter: "dl",
    dl0: 0,
    dl1: 1,
    dl2: 2,
    dl3: 3,
    dl4: 4,
    dl5: 5,
    dl6: 6,
    dl7: 7,
    dl8: 8,
    dl9: 9,
    dl10: 10
  },
  {
    parameter: "ul",
    ul0: 10,
    ul1: 11,
    ul2: 12,
    ul3: 13,
    ul4: 14,
    ul5: 15,
    ul6: 16,
    ul7: 17,
    ul8: 18,
    ul9: 19,
    ul10: 20
  }];
  _object = Object;


  constructor(private router: Router, private lbrservice: LinkBudgetMcsService, private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    this.reloadData();
  }

  hideModalFunction() {
    this.modalRef.close();
    // this.modalService.hideModalFunction();
  }

  addRow() {
    const Obj = { parameter: "DL", 'value0': 0, 'value1': 0, 'value2': 0, 'value3': 0, 'value4': 0, 'value5': 0, 'value6': 0, 'value7': 0, 'value8': 0, 'value9': 0, 'value10': 0, 'value11': 0, 'value12': 0, 'value13': 0, 'value14': 0, 'value15': 0, 'value16': 0, 'value17': 0, 'value18': 0, 'value19': 0, 'value20': 0, 'value21': 0, 'value22': 0, 'value23': 0, 'value24': 0, 'value25': 0, 'value26': 0, 'value27': 0, 'value28': 0 };
    const Obj2 = { parameter: "UL", 'value0': 0, 'value1': 0, 'value2': 0, 'value3': 0, 'value4': 0, 'value5': 0, 'value6': 0, 'value7': 0, 'value8': 0, 'value9': 0, 'value10': 0, 'value11': 0, 'value12': 0, 'value13': 0, 'value14': 0, 'value15': 0, 'value16': 0, 'value17': 0, 'value18': 0, 'value19': 0, 'value20': 0, 'value21': 0, 'value22': 0, 'value23': 0, 'value24': 0, 'value25': 0, 'value26': 0, 'value27': 0, 'value28': 0 };

    this.LinkBudgetMcsList.push(Obj);
    this.LinkBudgetMcsList.push(Obj2);
    console.log(this.LinkBudgetMcsList)
  }

  reloadData() {
    this.lbrservice.getAllLinkBudgetMcs().subscribe(
      data => {
        // console.log("status ", data, data['status']);
        this.LinkBudgetMcsList = JSON.parse(data);
        if (this.LinkBudgetMcsList.length == 0) {
          this.addRow();
        }
        // console.log("  this.LinkBudgetMcsList ", this.LinkBudgetMcsList)
      },
      error => console.log("errrrr ", error)
    );
  }

  // Funcitons for LinkBudgetMcs
  deleteLinkBudgetMcs(id: number) {
    this.lbrservice.deleteLinkBudgetMcs(id)
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

  updateLinkBudgetMcs(Obj: LinkBudgetMcs) {
    // console.log("ObjObjObjObjObjObjObj", Obj);
    this.lbrservice.updateLinkBudgetMcs(Obj).subscribe(data => {
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
    this.LinkBudgetMcsList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    console.log("id", id, property);

    this.editField = event.target.textContent;
  }

}

