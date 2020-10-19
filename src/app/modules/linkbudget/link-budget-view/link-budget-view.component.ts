import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkBudgetRangeService } from 'src/app/services/link-budget-range.service';
import { LinkBudgetViewService } from 'src/app/services/link-budget-view.service';
import { formatNumber } from '@angular/common';
import { CustomModalServiceService } from 'src/app/services/custom-modal-service.service';

@Component({
  selector: 'app-link-budget-view',
  templateUrl: './link-budget-view.component.html',
  styleUrls: ['./link-budget-view.component.scss']
})
export class LinkBudgetViewComponent implements OnInit {

  viewList: Array<any> = [];
  viewList2: Array<any> = [];
  linkedBudgetResultList: Array<any> = [];
  rangeList: Array<any> = [];
  dirList: Array<any> = [];
  mcsList: Array<any> = [];
  modelList: Array<any> = [];

  LookUpArray: Array<any> = [];
  HandoverGain: number = 3.25;

  test: string = "";
  _object = Object;

  // variables for view table row
  r11: string; r12: string; r13: string; r21: string; r22: string; r23: string; r31: string; r32: string; r33: string; r41: string; r42: string; r43: string;
  r51: string; r52: string; r53: string; r61: string; r62: string; r63: string; r71: string; r72: string; r73: string; r81: string; r82: string; r83: string;
  r91: string; r92: string; r93: string; r121: string; r122: string; r123: string; r124: string; r131: string; r132: string; r133: string; r134: string;
  r141: string; r142: string; r143: string; r144: string; r151: string; r152: string; r153: string; r154: string; r161: string; r162: string; r163: string; r164: string;
  r171: string; r172: string; r173: string; r174: string; r181: string; r182: string; r183: string; r184: string; r191: string; r192: string; r193: string; r194: string;

  eNb: string;
  UE: string;

  // rows for view table
  Obj = { parameter: "", urban: "", suburban: "", rural: "" };
  Obj2 = { parameter: "", const: "", urban: "", suburban: "", rural: "" };
  // rows for result table
  rowObj = { parameter: "", urbanDown: "", suburbanDown: "", ruralDown: "", urbanUp: "", suburbanUp: "", ruralUp: "" };

  // variables for Result Table row

  RT11: string; RT12: string; RT13: string; RT14: string; RT15: string; RT16: string; RT21: string; RT22: string; RT23: string; RT24: string; RT25: string; RT26: string;
  RT31: string; RT32: string; RT33: string; RT34: string; RT35: string; RT36: string; RT41: string; RT42: string; RT43: string; RT44: string; RT45: string; RT46: string;
  RT51: string; RT52: string; RT53: string; RT54: string; RT55: string; RT56: string; RT61: string; RT62: string; RT63: string; RT64: string; RT65: string; RT66: string;
  RT71: string; RT72: string; RT73: string; RT74: string; RT75: string; RT76: string; RT81: string; RT82: string; RT83: string; RT84: string; RT85: string; RT86: string;
  RT91: string; RT92: string; RT93: string; RT94: string; RT95: string; RT96: string; RT101: string; RT102: string; RT103: string; RT104: string; RT105: string; RT106: string;
  RT111: string; RT112: string; RT113: string; RT114: string; RT115: string; RT116: string; RT121: string; RT122: string; RT123: string; RT124: string; RT125: string; RT126: string;
  RT131: string; RT132: string; RT133: string; RT134: string; RT135: string; RT136: string; RT141: string; RT142: string; RT143: string; RT144: string; RT145: string; RT146: string;
  RT151: string; RT152: string; RT153: string; RT154: string; RT155: string; RT156: string; RT161: string; RT162: string; RT163: string; RT164: string; RT165: string; RT166: string;
  RT171: string; RT172: string; RT173: string; RT174: string; RT175: string; RT176: string; RT181: string; RT182: string; RT183: string; RT184: string; RT185: string; RT186: string;
  RT191: string; RT192: string; RT193: string; RT194: string; RT195: string; RT196: string; RT201: string; RT202: string; RT203: string; RT204: string; RT205: string; RT206: string;
  RT211: string; RT212: string; RT213: string; RT214: string; RT215: string; RT216: string; RT221: string; RT222: string; RT223: string; RT224: string; RT225: string; RT226: string;
  RT231: string; RT232: string; RT233: string; RT234: string; RT235: string; RT236: string; RT241: string; RT242: string; RT243: string; RT244: string; RT245: string; RT246: string;
  RT251: string; RT252: string; RT253: string; RT254: string; RT255: string; RT256: string; RT261: string; RT262: string; RT263: string; RT264: string; RT265: string; RT266: string;
  RT271: string; RT272: string; RT273: string; RT274: string; RT275: string; RT276: string; RT281: string; RT282: string; RT283: string; RT284: string; RT285: string; RT286: string;
  RT291: string; RT292: string; RT293: string; RT294: string; RT295: string; RT296: string; RT901: string; RT302: string; RT303: string; RT304: string; RT305: string; RT306: string;

  constructor(private router: Router, private rangeService: LinkBudgetRangeService,
    private viewService: LinkBudgetViewService, private modalService: CustomModalServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  openModal(modalName: string) {
    this.modalService.openModalFunction(modalName);
  }


  getData() {

    this.viewService.getAllLinkBudgetRangeMap().subscribe(
      data => {
        this.rangeList = JSON.parse(data);
        console.log("this.rangeList ", this.rangeList);
      },
      error => console.log("errrrr ", error)
    );

    this.viewService.getAllLinkBudgetDirectionMap().subscribe(
      data => {
        this.dirList = JSON.parse(data);
        console.log("  this.DirList ", this.dirList)
      },
      error => console.log("errrrr ", error)
    );

    this.viewService.getAllLinkBudgetMcsMap().subscribe(
      data => {
        this.mcsList = JSON.parse(data);
        console.log("  this.McsList ", this.mcsList)
      },
      error => console.log("errrrr ", error)
    );
    this.viewService.getAllLinkBudgetModelMap().subscribe(
      data => {
        this.modelList = JSON.parse(data);
        console.log("  this.ModelList ", this.modelList)
      },
      error => console.log("errrrr ", error)
    );

    this.calculationFn();

  }

  calculationFn() {
    setTimeout(() => {
      // row 1
      this.r11 = this.modelList[0]['urban'];
      this.r12 = this.modelList[0]['suburban'];
      this.r13 = this.modelList[0]['rural'];
      this.Obj = { parameter: "Constant A [db]", urban: this.r11, suburban: this.r12, rural: this.r13 };

      this.viewList.push(this.Obj);
      //row 2
      this.r21 = this.modelList[1]['urban'];
      this.r22 = this.modelList[1]['suburban'];
      this.r23 = this.modelList[1]['rural'];

      this.Obj = { parameter: "Corner frequency - const value [mhz]", urban: this.r21, suburban: this.r22, rural: this.r23 };
      this.viewList.push(this.Obj);

      //row 3
      this.r31 = this.toDecimal(- 2 - (29 - this.rangeList['SS Antenna Height']) * 0.145);
      this.r32 = this.toDecimal(-8 - (19 - this.rangeList['SS Antenna Height']) * 0.24);
      this.r33 = this.toDecimal(-16 - (15 - this.rangeList['SS Antenna Height']) * 0.74);

      this.Obj = { parameter: "Kc - clutter correction [db]", urban: this.r31, suburban: this.r32, rural: this.r33 };

      this.viewList.push(this.Obj);

      //row 4
      this.r41 = this.toDecimal((44.9 - 6.55 * Math.log10(this.rangeList['BST Antenna Height'])));
      this.r42 = this.r41;
      this.r43 = this.r41;

      this.Obj = { parameter: "eNB height corection", urban: this.r41, suburban: this.r42, rural: this.r43 };
      this.viewList.push(this.Obj);

      //row 5
      this.r51 = this.toDecimal(33.9 * Math.log10(this.modelList[1]['urban']));
      this.r52 = this.toDecimal(33.9 * Math.log10(this.modelList[1]['suburban']));
      this.r53 = this.toDecimal(33.9 * Math.log10(this.modelList[1]['rural']));

      this.Obj = { parameter: "Corner frequency part [db]", urban: this.r51, suburban: this.r52, rural: this.r53 };
      this.viewList.push(this.Obj);

      //row 6
      this.r61 = this.toDecimal(20 * Math.log10(this.rangeList['Frequency Band'] / this.modelList[1]['urban']));
      this.r62 = this.toDecimal(20 * Math.log10(this.rangeList['Frequency Band'] / this.modelList[1]['suburban']));
      this.r63 = this.toDecimal(20 * Math.log10(this.rangeList['Frequency Band'] / this.modelList[1]['rural']));

      this.Obj = { parameter: "Correction frequency part [db]", urban: this.r61, suburban: this.r62, rural: this.r63 };
      this.viewList.push(this.Obj);

      //row 7
      this.r71 = this.toDecimal(13.82 * Math.log10(this.rangeList['BST Antenna Height']));
      this.r72 = this.toDecimal(13.82 * Math.log10(this.rangeList['BST Antenna Height']));
      this.r73 = this.toDecimal(13.82 * Math.log10(this.rangeList['BST Antenna Height']));

      this.Obj = { parameter: "eNB hieght part [db]", urban: this.r71, suburban: this.r72, rural: this.r73 };
      this.viewList.push(this.Obj);

      //row 8
      if (parseInt(this.r31) > -5) {
        this.r81 = this.toDecimal(3.2 * Math.pow((Math.log10(11.75 * this.rangeList['SS Antenna Height'])), 2) - 4.97);
      } else {
        this.r81 = this.toDecimal(3.2 * Math.pow((Math.log10(11.75 * this.rangeList['SS Antenna Height'])), 2) - 4.97);
      }

      if (parseInt(this.r32) > -5) {
        this.r82 = this.toDecimal(3.2 * Math.pow((Math.log10(11.75 * this.rangeList['SS Antenna Height'])), 2) - 4.97);
      } else {
        this.r82 = this.toDecimal(3.2 * Math.pow((Math.log10(11.75 * this.rangeList['SS Antenna Height'])), 2) - 4.97);
      }

      if (parseInt(this.r33) > -5) {
        this.r83 = this.toDecimal(3.2 * Math.pow((Math.log10(11.75 * this.rangeList['SS Antenna Height'])), 2) - 4.97);
      } else {
        this.r83 = this.toDecimal((1.1 * (Math.log10(this.rangeList['Frequency Band'])) - 0.7) * this.rangeList['SS Antenna Height'] -
          (1.56 * Math.log10(this.rangeList['Frequency Band']) - 0.8));
      }
      this.Obj = { parameter: "UE height correction part [db]", urban: this.r81, suburban: this.r82, rural: this.r83 };
      this.viewList.push(this.Obj);


      // row 11
      this.eNb = this.toDecimal(this.dirList['Tx Power per Antenna [dBm]']['enb'] + this.dirList['eNB Feeder Loss [dB]']['enb'] + this.dirList['Rx Antenna Gain [dBi]']['enb']);
      this.UE = this.toDecimal(this.dirList['Tx Power per Antenna [dBm]']['ue'] + this.dirList['Rx Antenna Gain [dBi]']['ue']);

      //row 9
      this.r121 = "167.354098463161";
      if (1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71)
        - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)))) {
        this.r91 = 0 + "";
      } else {
        this.r91 = 1 + "";
      }

      if (1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72)
        - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)))) {
        this.r92 = "0";
      } else {
        this.r92 = "1";
      }

      if (1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73)
        - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)))) {
        this.r93 = 0 + "";
      } else {
        this.r93 = 1 + "";
      }

      this.Obj = { parameter: "Check validation", urban: this.r91, suburban: this.r92, rural: this.r93 };
      this.viewList.push(this.Obj);

      //row 12

      if (this.r91 == "0") {
        this.r122 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r122 = "";
      }

      if (this.r92 == "0") {
        this.r123 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r123 = "";
      }

      if (this.r93 == "0") {
        this.r124 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r121) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r124 = "";
      }

      this.Obj2 = { parameter: "Att DL", const: this.r121, urban: this.r122, suburban: this.r123, rural: this.r124 };
      this.viewList2.push(this.Obj2);

      // row 13

      this.r131 = this.toDecimal("167.51133244696");
      if (this.r91 == "0") {
        this.r132 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r131) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r132 = "";
      }

      if (this.r92 == "0") {
        this.r133 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r131) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r133 = "";
      }

      if (this.r93 == "0") {
        this.r134 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r131) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r134 = "";
      }

      this.Obj2 = { parameter: "Rate DL", const: this.r131, urban: this.r132, suburban: this.r133, rural: this.r134 };
      this.viewList2.push(this.Obj2);

      // row 14
      this.r141 = this.toDecimal("0.0");
      if (this.r91 == "0") {
        this.r142 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r141) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r142 = "";
      }

      if (this.r92 == "0") {
        this.r143 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r141) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r143 = "";
      }

      if (this.r93 == "0") {
        this.r144 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r141) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r144 = "";
      }

      this.Obj2 = { parameter: "", const: this.r141, urban: this.r142, suburban: this.r143, rural: this.r144 };
      this.viewList2.push(this.Obj2);

      // row 15
      this.r151 = this.toDecimal("0.0");
      if (this.r91 == "0") {
        this.r142 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r151) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r152 = "";
      }

      if (this.r92 == "0") {
        this.r153 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r151) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r153 = "";
      }

      if (this.r93 == "0") {
        this.r154 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r151) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r154 = "";
      }

      this.Obj2 = { parameter: "", const: this.r151, urban: this.r152, suburban: this.r153, rural: this.r154 };
      this.viewList2.push(this.Obj2);

      // row 16
      this.r161 = this.toDecimal("161.816902355143");
      if (this.r91 == "0") {
        this.r162 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r161) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r162 = "";
      }

      if (this.r92 == "0") {
        this.r163 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r161) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r163 = "";
      }

      if (this.r93 == "0") {
        this.r164 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r161) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r164 = "";
      }

      this.Obj2 = { parameter: "Att UL", const: this.r161, urban: this.r162, suburban: this.r163, rural: this.r164 };
      this.viewList2.push(this.Obj2);

      // row 17
      this.r171 = this.toDecimal("145.028310680398");
      if (this.r91 == "0") {
        this.r172 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r172 = "";
      }

      if (this.r92 == "0") {
        this.r173 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r173 = "";
      }

      if (this.r93 == "0") {
        this.r174 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r174 = "";
      }

      this.Obj2 = { parameter: "Rate UL", const: this.r171, urban: this.r172, suburban: this.r173, rural: this.r174 };
      this.viewList2.push(this.Obj2);


      // row 18
      this.r181 = this.toDecimal("0.0");
      if (this.r91 == "0") {
        this.r182 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r181) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r182 = "";
      }

      if (this.r92 == "0") {
        this.r183 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r181) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r183 = "";
      }

      if (this.r93 == "0") {
        this.r184 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r181) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r184 = "";
      }

      this.Obj2 = { parameter: "", const: this.r181, urban: this.r182, suburban: this.r183, rural: this.r184 };
      this.viewList2.push(this.Obj2);

      // row 19
      this.r191 = this.toDecimal("161.816902355143");
      if (this.r91 == "0") {
        this.r192 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r191) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r192 = "";
      }

      if (this.r92 == "0") {
        this.r193 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r191) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r193 = "";
      }

      if (this.r93 == "0") {
        this.r194 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r191) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r194 = "";
      }

      this.Obj2 = { parameter: "Rate UL", const: this.r191, urban: this.r192, suburban: this.r193, rural: this.r194 };
      this.viewList2.push(this.Obj2);


      // row 20
      this.r171 = this.toDecimal("145.028310680398");
      if (this.r91 == "0") {
        this.r172 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.r172 = "";
      }

      if (this.r92 == "0") {
        this.r173 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42))));
      } else {
        this.r173 = "";
      }

      if (this.r93 == "0") {
        this.r174 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.r171) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43))))
      } else {
        this.r174 = "";
      }

      this.Obj2 = { parameter: "Rate UL", const: this.r171, urban: this.r172, suburban: this.r173, rural: this.r174 };
      this.viewList2.push(this.Obj2);

      // ***********************************************************************************************************//
      // ***************************************   RESULT  CALCULATION  ********************************************//
      // ***********************************************************************************************************//

      this.LookUpArray = [
        { "urban": { "DL": 7.72, "UL": 9.44 } },
        { "suburban": { "DL": 6.14, "UL": 7.75 } },
        { "rural": { "DL": 4.96, "UL": 6.47 } }
      ];

      // console.log(this.LookUpArray)
      // row 1
      if (this.r91 == "0") {
        this.RT11 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain)
          - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT11 = "";
      }

      if (this.r93 == "0") {
        this.RT12 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain) -
          parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT12 = "";
      }

      if (this.r93 == "0") {
        this.RT13 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] - this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] -
          this.LookUpArray[2]['rural']['DL'] + this.HandoverGain) - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT13 = "";
      }

      if (this.r91 == "0") {
        this.RT14 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT14 = "";
      }

      if (this.r92 == "0") {
        this.RT15 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT15 = "";
      }
      if (this.r93 == "0") {
        this.RT16 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value0'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT16 = "";
      }


      this.linkedBudgetResultList.push(['0-QPSK', this.RT11, this.RT12, this.RT13, this.RT14, this.RT15, this.RT16]);

      // console.log(this.linkedBudgetResultList)

      // = IF(F$31, "", 1000 * 10 ^ ((G61 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))
      // = IF(F$31, "", 1000 * 10 ^ ((G56 - G$57 + G$60 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))
      // = IF(F$31, "", 1000 * 10 ^ (($F$33 - G17 + $G$10 - $F$13 - G$57 + G$60 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))

      // row 2
      if (this.r91 == "0") {
        this.RT21 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT21 = "";
      }

      // =IF(G$31, "", 1000 * 10 ^ ((G62 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      // =IF(G$31, "", 1000 * 10 ^ ((G56 - G$58 + G$60 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      // =IF(G$31, "", 1000 * 10 ^ (($F$33 - G17 + $G$10 - $F$13 - G$58 + G$60 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      if (this.r92 == "0") {
        this.RT22 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT22 = "";
      }

      if (this.r93 == "0") {
        this.RT23 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT23 = "";
      }
      // console.log(this.RT21, this.RT22, this.RT23)

      // = IF(F$31, "", 1000 * 10 ^ ((G69 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))
      // = IF(F$31, "", 1000 * 10 ^ ((G64 - G$65 + G$68 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))
      // = IF(F$31, "", 1000 * 10 ^ (($G$33 - G18 + $F$10 - $G$13 - $F$12 - G$65 + G$68 - $E$23 - $E$27 - $E$28 + $E$29 - $E$25 + $E$30) / $E$26))


      if (this.r91 == "0") {
        this.RT24 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT24 = "";
      }
      if (this.r92 == "0") {
        this.RT25 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT25 = "";
      }
      if (this.r93 == "0") {
        this.RT26 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT26 = "";
      }
      // console.log(this.RT24, this.RT25, this.RT26)
      this.linkedBudgetResultList.push(['1-QPSK', this.RT21, this.RT22, this.RT23, this.RT24, this.RT25, this.RT26]);

      // ******************  Row 3 ************** //
      if (this.r91 == "0") {
        this.RT31 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT31 = "";
      }

      // =IF(G$31, "", 1000 * 10 ^ ((G62 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      // =IF(G$31, "", 1000 * 10 ^ ((G56 - G$58 + G$60 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      // =IF(G$31, "", 1000 * 10 ^ (($F$33 - G17 + $G$10 - $F$13 - G$58 + G$60 - $F$23 - $F$27 - $F$28 + $F$29 - $F$25 + $F$30) / $F$26))
      if (this.r92 == "0") {
        this.RT32 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT32 = "";
      }

      if (this.r93 == "0") {
        this.RT33 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT33 = "";
      }

      if (this.r91 == "0") {
        this.RT34 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT34 = "";
      }
      if (this.r92 == "0") {
        this.RT35 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT35 = "";
      }
      if (this.r93 == "0") {
        this.RT36 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value2'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT36 = "";
      }
      // =IF(I$91, "", 1000 * 10 ^ ((H71 - $G$23 - $G$27 - $G$28 + $G$29 - $G$25 + $G$30) / $G$26))
      // =IF(I$91, "", 1000 * 10 ^ ((H64-H$67+H$68 - $G$23 - $G$27 - $G$28 + $G$29 - $G$25 + $G$30) / $G$26))
      // =IF(I$91, "", 1000 * 10 ^ (($G$33-H18+$F$10-$G$13-$F$12-H$67+H$68 - $G$23 - $G$27 - $G$28 + $G$29 - $G$25 + $G$30) / $G$26))
      // console.log(this.RT31, this.RT32, this.RT33, this.RT34, this.RT35, this.RT36)

      this.linkedBudgetResultList.push(['2-QPSK', this.RT31, this.RT32, this.RT33, this.RT34, this.RT35, this.RT36]);


      // ******************  Row 4 ************** //
      if (this.r91 == "0") {
        this.RT41 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT41 = "";
      }
      if (this.r92 == "0") {
        this.RT42 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT42 = "";
      }
      if (this.r93 == "0") {
        this.RT43 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT43 = "";
      }
      if (this.r91 == "0") {
        this.RT44 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT44 = "";
      }
      if (this.r92 == "0") {
        this.RT45 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT45 = "";
      }
      if (this.r93 == "0") {
        this.RT46 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value3'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT46 = "";
      }
      // console.log(this.RT41, this.RT42, this.RT43, this.RT44, this.RT45, this.RT46)
      this.linkedBudgetResultList.push(['3-QPSK', this.RT41, this.RT42, this.RT43, this.RT44, this.RT45, this.RT46]);

      // ******************  Row 5 ************** //
      if (this.r91 == "0") {
        this.RT51 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT51 = "";
      }
      if (this.r92 == "0") {
        this.RT52 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT52 = "";
      }
      if (this.r93 == "0") {
        this.RT53 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT53 = "";
      }
      if (this.r91 == "0") {
        this.RT54 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT54 = "";
      }
      if (this.r92 == "0") {
        this.RT55 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT55 = "";
      }
      if (this.r93 == "0") {
        this.RT56 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value4'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT56 = "";
      }

      this.linkedBudgetResultList.push(['4-QPSK', this.RT51, this.RT52, this.RT53, this.RT54, this.RT55, this.RT56]);
      // console.log(this.RT51, this.RT52, this.RT53, this.RT54, this.RT55, this.RT56]);

      // ******************  Row 6 ************** //
      if (this.r91 == "0") {
        this.RT61 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT61 = "";
      }
      if (this.r92 == "0") {
        this.RT62 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT62 = "";
      }
      if (this.r93 == "0") {
        this.RT63 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT63 = "";
      }
      if (this.r91 == "0") {
        this.RT64 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT64 = "";
      }
      if (this.r92 == "0") {
        this.RT65 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT65 = "";
      }
      if (this.r93 == "0") {
        this.RT66 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value5'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT66 = "";
      }

      this.linkedBudgetResultList.push(['5-QPSK', this.RT61, this.RT62, this.RT63, this.RT64, this.RT65, this.RT66]);
      // console.log(this.RT61, this.RT62, this.RT63, this.RT64, this.RT65, this.RT66)

      // ******************  Row 7 ************** //
      if (this.r91 == "0") {
        this.RT71 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT71 = "";
      }
      if (this.r92 == "0") {
        this.RT72 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT72 = "";
      }
      if (this.r93 == "0") {
        this.RT73 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT73 = "";
      }
      if (this.r91 == "0") {
        this.RT74 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT74 = "";
      }
      if (this.r92 == "0") {
        this.RT75 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT75 = "";
      }
      if (this.r93 == "0") {
        this.RT76 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value6'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT76 = "";
      }

      this.linkedBudgetResultList.push(['6-QPSK', this.RT71, this.RT72, this.RT73, this.RT74, this.RT75, this.RT76]);
      // console.log(this.RT71, this.RT72, this.RT73, this.RT74, this.RT75, this.RT76)


      // ******************  Row 8 ************** //
      if (this.r91 == "0") {
        this.RT81 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT81 = "";
      }
      if (this.r92 == "0") {
        this.RT82 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT82 = "";
      }
      if (this.r93 == "0") {
        this.RT83 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT83 = "";
      }
      if (this.r91 == "0") {
        this.RT84 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT84 = "";
      }
      if (this.r92 == "0") {
        this.RT85 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT85 = "";
      }
      if (this.r93 == "0") {
        this.RT86 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value7'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT86 = "";
      }

      this.linkedBudgetResultList.push(['7-QPSK', this.RT81, this.RT82, this.RT83, this.RT84, this.RT85, this.RT86]);
      // console.log(this.RT81, this.RT82, this.RT83, this.RT84, this.RT85, this.RT86)

      // ******************  Row 9 ************** //
      if (this.r91 == "0") {
        this.RT91 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT91 = "";
      }
      if (this.r92 == "0") {
        this.RT92 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT92 = "";
      }
      if (this.r93 == "0") {
        this.RT93 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT93 = "";
      }
      if (this.r91 == "0") {
        this.RT94 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT94 = "";
      }
      if (this.r92 == "0") {
        this.RT95 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT95 = "";
      }
      if (this.r93 == "0") {
        this.RT96 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value8'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT96 = "";
      }

      this.linkedBudgetResultList.push(['8-QPSK', this.RT91, this.RT92, this.RT93, this.RT94, this.RT95, this.RT96]);
      // console.log(this.RT91, this.RT92, this.RT93, this.RT94, this.RT95, this.RT96)

      // ******************  Row 10 ************** //
      if (this.r91 == "0") {
        this.RT101 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT101 = "";
      }
      if (this.r92 == "0") {
        this.RT102 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT102 = "";
      }
      if (this.r93 == "0") {
        this.RT103 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT103 = "";
      }
      if (this.r91 == "0") {
        this.RT104 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT104 = "";
      }
      if (this.r92 == "0") {
        this.RT105 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT105 = "";
      }
      if (this.r93 == "0") {
        this.RT106 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value9'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT106 = "";
      }

      this.linkedBudgetResultList.push(['9-QPSK', this.RT101, this.RT102, this.RT103, this.RT104, this.RT105, this.RT106]);
      // console.log(this.RT101, this.RT102, this.RT103, this.RT104, this.RT105, this.RT106)

      // ******************  Row 11 ************** //
      if (this.r91 == "0") {
        this.RT111 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT111 = "";
      }
      if (this.r92 == "0") {
        this.RT112 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT112 = "";
      }
      if (this.r93 == "0") {
        this.RT113 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT113 = "";
      }
      if (this.r91 == "0") {
        this.RT114 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT114 = "";
      }
      if (this.r92 == "0") {
        this.RT115 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT115 = "";
      }
      if (this.r93 == "0") {
        this.RT116 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value10'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT116 = "";
      }

      this.linkedBudgetResultList.push(['10-QPSK', this.RT111, this.RT112, this.RT113, this.RT114, this.RT115, this.RT116]);



      // ******************  Row 12 ************** //
      if (this.r91 == "0") {
        this.RT121 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT121 = "";
      }
      if (this.r92 == "0") {
        this.RT122 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT122 = "";
      }
      if (this.r93 == "0") {
        this.RT123 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT123 = "";
      }
      if (this.r91 == "0") {
        this.RT124 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT124 = "";
      }
      if (this.r92 == "0") {
        this.RT125 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT125 = "";
      }
      if (this.r93 == "0") {
        this.RT126 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value11'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT126 = "";
      }

      this.linkedBudgetResultList.push(['11-QPSK', this.RT121, this.RT122, this.RT123, this.RT124, this.RT125, this.RT126]);

      // ******************  Row 13 ************** //
      if (this.r91 == "0") {
        this.RT131 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT131 = "";
      }
      if (this.r92 == "0") {
        this.RT132 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT132 = "";
      }
      if (this.r93 == "0") {
        this.RT133 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT133 = "";
      }
      if (this.r91 == "0") {
        this.RT134 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT134 = "";
      }
      if (this.r92 == "0") {
        this.RT135 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT135 = "";
      }
      if (this.r93 == "0") {
        this.RT136 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value12'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT136 = "";
      }

      this.linkedBudgetResultList.push(['12-QPSK', this.RT131, this.RT132, this.RT133, this.RT134, this.RT135, this.RT136]);


      // ******************  Row 14 ************** //
      if (this.r91 == "0") {
        this.RT141 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT141 = "";
      }
      if (this.r92 == "0") {
        this.RT142 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT142 = "";
      }
      if (this.r93 == "0") {
        this.RT143 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT143 = "";
      }
      if (this.r91 == "0") {
        this.RT144 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT144 = "";
      }
      if (this.r92 == "0") {
        this.RT145 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT145 = "";
      }
      if (this.r93 == "0") {
        this.RT146 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value13'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT146 = "";
      }

      this.linkedBudgetResultList.push(['13-QPSK', this.RT141, this.RT142, this.RT143, this.RT144, this.RT145, this.RT146]);

      // ******************  Row 15 ************** //
      if (this.r91 == "0") {
        this.RT151 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT151 = "";
      }
      if (this.r92 == "0") {
        this.RT152 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT152 = "";
      }
      if (this.r93 == "0") {
        this.RT153 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT153 = "";
      }
      if (this.r91 == "0") {
        this.RT154 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT154 = "";
      }
      if (this.r92 == "0") {
        this.RT155 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT155 = "";
      }
      if (this.r93 == "0") {
        this.RT156 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value14'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT156 = "";
      }

      this.linkedBudgetResultList.push(['14-QPSK', this.RT151, this.RT152, this.RT153, this.RT154, this.RT155, this.RT156]);


      // ******************  Row 16 ************** //
      if (this.r91 == "0") {
        this.RT161 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT161 = "";
      }
      if (this.r92 == "0") {
        this.RT162 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT162 = "";
      }
      if (this.r93 == "0") {
        this.RT163 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT163 = "";
      }
      if (this.r91 == "0") {
        this.RT164 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT164 = "";
      }
      if (this.r92 == "0") {
        this.RT165 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT165 = "";
      }
      if (this.r93 == "0") {
        this.RT166 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value15'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT166 = "";
      }

      this.linkedBudgetResultList.push(['15-QPSK', this.RT161, this.RT162, this.RT163, this.RT164, this.RT165, this.RT166]);



      // ******************  Row 17 ************** //
      if (this.r91 == "0") {
        this.RT171 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT171 = "";
      }
      if (this.r92 == "0") {
        this.RT172 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT172 = "";
      }
      if (this.r93 == "0") {
        this.RT173 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT173 = "";
      }
      if (this.r91 == "0") {
        this.RT174 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT174 = "";
      }
      if (this.r92 == "0") {
        this.RT175 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT175 = "";
      }
      if (this.r93 == "0") {
        this.RT176 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value16'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT176 = "";
      }

      this.linkedBudgetResultList.push(['16-QPSK', this.RT171, this.RT172, this.RT173, this.RT174, this.RT175, this.RT176]);


      // ******************  Row 18 ************** //
      if (this.r91 == "0") {
        this.RT181 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT181 = "";
      }
      if (this.r92 == "0") {
        this.RT182 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT182 = "";
      }
      if (this.r93 == "0") {
        this.RT183 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT183 = "";
      }
      if (this.r91 == "0") {
        this.RT184 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT184 = "";
      }
      if (this.r92 == "0") {
        this.RT185 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT185 = "";
      }
      if (this.r93 == "0") {
        this.RT186 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value17'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT186 = "";
      }

      this.linkedBudgetResultList.push(['17-QPSK', this.RT181, this.RT182, this.RT183, this.RT184, this.RT185, this.RT186]);


      // ******************  Row 19 ************** //
      if (this.r91 == "0") {
        this.RT191 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT191 = "";
      }
      if (this.r92 == "0") {
        this.RT192 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT192 = "";
      }
      if (this.r93 == "0") {
        this.RT193 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT193 = "";
      }
      if (this.r91 == "0") {
        this.RT194 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT194 = "";
      }
      if (this.r92 == "0") {
        this.RT195 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT195 = "";
      }
      if (this.r93 == "0") {
        this.RT196 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value18'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT196 = "";
      }

      this.linkedBudgetResultList.push(['18-QPSK', this.RT191, this.RT192, this.RT193, this.RT194, this.RT195, this.RT196]);

      // ******************  Row 20 ************** //
      if (this.r91 == "0") {
        this.RT201 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT201 = "";
      }
      if (this.r92 == "0") {
        this.RT202 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT202 = "";
      }
      if (this.r93 == "0") {
        this.RT203 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT203 = "";
      }
      if (this.r91 == "0") {
        this.RT204 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT204 = "";
      }
      if (this.r92 == "0") {
        this.RT205 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT205 = "";
      }
      if (this.r93 == "0") {
        this.RT206 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value19'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT206 = "";
      }

      this.linkedBudgetResultList.push(['19-QPSK', this.RT201, this.RT202, this.RT203, this.RT204, this.RT205, this.RT206]);


      // ******************  Row 21 ************** //
      if (this.r91 == "0") {
        this.RT211 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT211 = "";
      }
      if (this.r92 == "0") {
        this.RT212 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT212 = "";
      }
      if (this.r93 == "0") {
        this.RT213 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT213 = "";
      }
      if (this.r91 == "0") {
        this.RT214 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT214 = "";
      }
      if (this.r92 == "0") {
        this.RT215 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT215 = "";
      }
      if (this.r93 == "0") {
        this.RT216 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value20'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT216 = "";
      }

      this.linkedBudgetResultList.push(['20-QPSK', this.RT211, this.RT212, this.RT213, this.RT214, this.RT215, this.RT216]);

      // ******************  Row 22 ************** //
      if (this.r91 == "0") {
        this.RT221 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT221 = "";
      }
      if (this.r92 == "0") {
        this.RT222 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT222 = "";
      }
      if (this.r93 == "0") {
        this.RT223 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT223 = "";
      }
      if (this.r91 == "0") {
        this.RT224 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT224 = "";
      }
      if (this.r92 == "0") {
        this.RT225 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT225 = "";
      }
      if (this.r93 == "0") {
        this.RT226 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value21'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT226 = "";
      }

      this.linkedBudgetResultList.push(['21-QPSK', this.RT221, this.RT222, this.RT223, this.RT224, this.RT225, this.RT226]);


      // ******************  Row 23 ************** //
      if (this.r91 == "0") {
        this.RT231 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT231 = "";
      }
      if (this.r92 == "0") {
        this.RT232 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT232 = "";
      }
      if (this.r93 == "0") {
        this.RT233 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT233 = "";
      }
      if (this.r91 == "0") {
        this.RT234 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT234 = "";
      }
      if (this.r92 == "0") {
        this.RT235 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT235 = "";
      }
      if (this.r93 == "0") {
        this.RT236 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value22'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT236 = "";
      }

      this.linkedBudgetResultList.push(['22-QPSK', this.RT231, this.RT232, this.RT233, this.RT234, this.RT235, this.RT236]);


      // ******************  Row 24 ************** //
      if (this.r91 == "0") {
        this.RT241 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT241 = "";
      }
      if (this.r92 == "0") {
        this.RT242 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT242 = "";
      }
      if (this.r93 == "0") {
        this.RT243 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT243 = "";
      }
      if (this.r91 == "0") {
        this.RT244 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT244 = "";
      }
      if (this.r92 == "0") {
        this.RT245 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT245 = "";
      }
      if (this.r93 == "0") {
        this.RT246 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value23'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT246 = "";
      }

      this.linkedBudgetResultList.push(['23-QPSK', this.RT241, this.RT242, this.RT243, this.RT244, this.RT245, this.RT246]);


      // ******************  Row 25 ************** //
      if (this.r91 == "0") {
        this.RT251 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT251 = "";
      }
      if (this.r92 == "0") {
        this.RT252 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT252 = "";
      }
      if (this.r93 == "0") {
        this.RT253 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT253 = "";
      }
      if (this.r91 == "0") {
        this.RT254 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT254 = "";
      }
      if (this.r92 == "0") {
        this.RT255 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT255 = "";
      }
      if (this.r93 == "0") {
        this.RT256 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value24'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT256 = "";
      }

      this.linkedBudgetResultList.push(['24-QPSK', this.RT251, this.RT252, this.RT253, this.RT254, this.RT255, this.RT256]);


      // ******************  Row 26 ************** //
      if (this.r91 == "0") {
        this.RT261 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT261 = "";
      }
      if (this.r92 == "0") {
        this.RT262 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT262 = "";
      }
      if (this.r93 == "0") {
        this.RT263 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT263 = "";
      }
      if (this.r91 == "0") {
        this.RT264 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT264 = "";
      }
      if (this.r92 == "0") {
        this.RT265 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT265 = "";
      }
      if (this.r93 == "0") {
        this.RT266 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value25'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT266 = "";
      }

      this.linkedBudgetResultList.push(['25-QPSK', this.RT261, this.RT262, this.RT263, this.RT264, this.RT265, this.RT266]);

      // ******************  Row 27 ************** //
      if (this.r91 == "0") {
        this.RT271 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT271 = "";
      }
      if (this.r92 == "0") {
        this.RT272 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT272 = "";
      }
      if (this.r93 == "0") {
        this.RT273 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT273 = "";
      }
      if (this.r91 == "0") {
        this.RT274 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT274 = "";
      }
      if (this.r92 == "0") {
        this.RT275 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT275 = "";
      }
      if (this.r93 == "0") {
        this.RT276 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value26'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT276 = "";
      }

      this.linkedBudgetResultList.push(['26-QPSK', this.RT271, this.RT272, this.RT273, this.RT274, this.RT275, this.RT276]);


      // ******************  Row 13 ************** //
      if (this.r91 == "0") {
        this.RT281 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT281 = "";
      }
      if (this.r92 == "0") {
        this.RT282 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT282 = "";
      }
      if (this.r93 == "0") {
        this.RT283 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT283 = "";
      }
      if (this.r91 == "0") {
        this.RT284 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT284 = "";
      }
      if (this.r92 == "0") {
        this.RT285 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT285 = "";
      }
      if (this.r93 == "0") {
        this.RT286 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value27'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT286 = "";
      }

      this.linkedBudgetResultList.push(['27-QPSK', this.RT281, this.RT282, this.RT283, this.RT284, this.RT285, this.RT286]);


      // ******************  Row 13 ************** //
      if (this.r91 == "0") {
        this.RT291 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.eNb) - this.mcsList['DL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
          parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))));
      } else {
        this.RT291 = "";
      }
      if (this.r92 == "0") {
        this.RT292 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[1]['suburban']['DL'] + this.HandoverGain - parseFloat(this.r12) -
          parseFloat(this.r52) - parseFloat(this.r62) + parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT292 = "";
      }
      if (this.r93 == "0") {
        this.RT293 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
          this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[2]['rural']['DL'] + this.HandoverGain - parseFloat(this.r13) -
          parseFloat(this.r53) - parseFloat(this.r63) + parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT293 = "";
      }
      if (this.r91 == "0") {
        this.RT294 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[0]['urban']['UL'] + this.HandoverGain) - parseFloat(this.r11) - parseFloat(this.r51) - parseFloat(this.r61) +
          parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)));
      } else {
        this.RT294 = "";
      }
      if (this.r92 == "0") {
        this.RT295 = this.toDecimal(1000 * Math.pow(10, ((parseFloat(this.UE) - this.mcsList['UL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[1]['suburban']['UL'] + this.HandoverGain) - parseFloat(this.r12) - parseFloat(this.r52) - parseFloat(this.r62) +
          parseFloat(this.r72) - parseFloat(this.r32) + parseFloat(this.r82)) / parseFloat(this.r42)));
      } else {
        this.RT295 = "";
      }
      if (this.r93 == "0") {
        this.RT296 = this.toDecimal(1000 * Math.pow(10, (parseFloat(this.UE) - this.mcsList['UL']['value28'] + this.dirList['Rx Antenna Gain [dBi]']['enb'] - this.dirList['Inter cell interference margin DL / UL [dB]']['ue'] -
          this.dirList['eNB Feeder Loss [dB]']['enb'] - this.LookUpArray[2]['rural']['UL'] + this.HandoverGain - parseFloat(this.r13) - parseFloat(this.r53) - parseFloat(this.r63) +
          parseFloat(this.r73) - parseFloat(this.r33) + parseFloat(this.r83)) / parseFloat(this.r43)));
      } else {
        this.RT296 = "";
      }

      this.linkedBudgetResultList.push(['28-QPSK', this.RT291, this.RT292, this.RT293, this.RT294, this.RT295, this.RT296]);











      // console.log("f33", parseFloat(this.eNb))
      // console.log("g17", this.mcsList['DL']['value1'])
      // console.log("g10", this.dirList['Rx Antenna Gain [dBi]']['ue'])
      // console.log("f13", this.dirList['Inter cell interference margin DL / UL [dB]']['enb'])
      // console.log("g57", this.LookUpArray[0]['urban']['DL'])
      // console.log("g60", this.HandoverGain)
      // console.log("e23", parseFloat(this.r11))
      // console.log("e27", parseFloat(this.r51))
      // console.log("e28", parseFloat(this.r61))
      // console.log("e29", parseFloat(this.r71))
      // console.log("e25", parseFloat(this.r31))
      // console.log("30", parseFloat(this.r81))
      // console.log(parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
      //   this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
      //   parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81));
      // console.log("div", (parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
      //   this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
      //   parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41))
      // console.log("val", 1000 * Math.pow(10, (parseFloat(this.eNb) - this.mcsList['DL']['value1'] + this.dirList['Rx Antenna Gain [dBi]']['ue'] -
      //   this.dirList['Inter cell interference margin DL / UL [dB]']['enb'] - this.LookUpArray[0]['urban']['DL'] + this.HandoverGain - parseFloat(this.r11) -
      //   parseFloat(this.r51) - parseFloat(this.r61) + parseFloat(this.r71) - parseFloat(this.r31) + parseFloat(this.r81)) / parseFloat(this.r41)))
      // console.log()

    }, 1000);

  }
  toDecimal(num) {
    return formatNumber(num, "en-US", "0.0-2")
  }

}
