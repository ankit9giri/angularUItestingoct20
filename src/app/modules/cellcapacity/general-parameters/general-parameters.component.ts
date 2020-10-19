import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';
import { GeneralParameterService } from 'src/app/services/general-parameter.service';

@Component({
  selector: 'app-general-parameters',
  templateUrl: './general-parameters.component.html',
  styleUrls: ['./general-parameters.component.scss']
})
export class GeneralParametersComponent implements OnInit {

  DimGPList: Array<any> = [];

  isEdit = false;
  subUrban: number;
  denseUrban: number;
  rural: number;
  urban: number;
  // Pk references
  pk1: number; pk2: number; pk3: number; pk4: number; pk5: number; pk6: number; pk7: number; pk8: number; pk9: number; pk10: number; pk11: number;


  selectedoperating_band: any;
  selectedchannel_bandwidth: any;
  selectedchannel_model: any;
  selectedmimo_setting_dl: any;
  selectedmimo_setting_ul: any;
  selectedscheduler_ul: any;
  selectedextended_ul_mcs_range: any;
  selectedvictim_cell_always_fully_loaded: any;
  selected_6_sector_deployment: any;
  selecteddeployment_class: any;

  changeFn(event: Event) {
    console.log(event)
  }

  operating_bandArr: Array<number> = [850, 900, 1500, 1700, 1800, 1900, 2100, 2600];

  channel_bandwidthArr: Array<number> = [1.4, 3, 5, 10, 15, 20];

  channel_modelArr: Array<string> = ['Enhanced Pedestrian A 5 Hz', 'Enhanced Typical Urban 70 Hz'];

  mimo_setting_dlArr: Array<string> = ['1Tx SIMO', '2Tx OL MIMO Mode 3', '2Tx CL MIMO Mode 4', '8Tx SS - LTBF Mode 7',
    '8Tx SS-STBF Mode 7', '8Tx DS-HBF Mode 8', '8Tx DS-STBF Mode 8'];

  mimo_setting_ulArr: Array<string> = ['2Rx MRC', '4Rx MRC', '8Rx MRC', '2Rx IRC', '4Rx IRC', '8Rx IRC'];

  scheduler_dlArr: Array<string> = ['Channel aware (RRM SFS)'];

  scheduler_ulArr: Array<string> = ['Channel unaware', 'Channel aware', 'Interference aware'];

  extended_ul_mcs_rangeArr: Array<string> = ['Yes', 'No'];

  victim_cell_always_fully_loadedArr: Array<string> = ['Yes', 'No'];

  _6_sector_deploymentArr = ['Yes', 'No'];

  deployment_classArr = ['Outdoor', 'Outdoor-to-Indoor Basic&Mature', 'Outdoor-to-Indoor High End'];

  constructor(private modalRef: NgbActiveModal, private gpService: GeneralParameterService, public alertService: AlertService) {
    console.clear();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  hideModalFunction() {
    this.modalRef.close();
    // this.modalService.hideModalFunction();
  }

  save() {

    let finalObj = [];
    if (this.isEdit) {
      finalObj = [
        {
          id: this.pk1, parameter: 'Inter Site Distance (km)', denseUrban: this.denseUrban, subUrban: this.subUrban, rural: this.rural,
          urban: this.urban
        },
        { id: this.pk2, parameter: 'Operating Band (MHz)', dl: this.selectedoperating_band, ul: this.selectedoperating_band },
        { id: this.pk3, parameter: 'Channel Bandwidth (MHz)', dl: this.selectedchannel_bandwidth, ul: this.selectedchannel_bandwidth },
        { id: this.pk4, parameter: 'Channel Model', dl: this.selectedchannel_model, ul: this.selectedchannel_model },
        { id: this.pk5, parameter: 'Cell Load', dl: '50%', ul: '50%' },
        { id: this.pk6, parameter: 'MIMO Settings', dl: this.selectedmimo_setting_dl, ul: this.selectedmimo_setting_ul },
        { id: this.pk7, parameter: 'Scheduler', dl: 'Channel aware (RRM SFS)', ul: this.selectedscheduler_ul },
        { id: this.pk8, parameter: 'Extended UL MCS Range', dl: '-', ul: this.selectedextended_ul_mcs_range },
        { id: this.pk9, parameter: 'Victim Cell Always Fully Loaded (100% PRB utilization)', dl: this.selectedvictim_cell_always_fully_loaded, ul: this.selectedvictim_cell_always_fully_loaded },
        { id: this.pk10, parameter: '6-sector Deployment', dl: this.selected_6_sector_deployment, ul: this.selected_6_sector_deployment },
        { id: this.pk11, parameter: 'Deployment Class', dl: this.selecteddeployment_class, ul: this.selecteddeployment_class }
      ];
    } else {
      finalObj = [
        {
          parameter: 'Inter Site Distance (km)', denseUrban: this.denseUrban, subUrban: this.subUrban, rural: this.rural,
          urban: this.urban
        },
        { parameter: 'Operating Band (MHz)', dl: this.selectedoperating_band, ul: this.selectedoperating_band },
        { parameter: 'Channel Bandwidth (MHz)', dl: this.selectedchannel_bandwidth, ul: this.selectedchannel_bandwidth },
        { parameter: 'Channel Model', dl: this.selectedchannel_model, ul: this.selectedchannel_model },
        { parameter: 'Cell Load', dl: '50%', ul: '50%' },
        { parameter: 'MIMO Settings', dl: this.selectedmimo_setting_dl, ul: this.selectedmimo_setting_ul },
        { parameter: 'Scheduler', dl: 'Channel aware (RRM SFS)', ul: this.selectedscheduler_ul },
        { parameter: 'Extended UL MCS Range', dl: '-', ul: this.selectedextended_ul_mcs_range },
        { parameter: 'Victim Cell Always Fully Loaded (100% PRB utilization)', dl: this.selectedvictim_cell_always_fully_loaded, ul: this.selectedvictim_cell_always_fully_loaded },
        { parameter: '6-sector Deployment', dl: this.selected_6_sector_deployment, ul: this.selected_6_sector_deployment },
        { parameter: 'Deployment Class', dl: this.selecteddeployment_class, ul: this.selecteddeployment_class }
      ];

    }

    this.updateDimGeneralParameter(finalObj);
  }

  updateDimGeneralParameter(finalObj) {

    this.gpService.updateDimGeneralParameter(finalObj).subscribe(data => {
      if (data['status'] == 201) {
        // update message and then close modal
        this.alertService.success('Success!!', 'options')
        setTimeout(() => {
          this.hideModalFunction();
        }, 2000);

      }
    }, err => {
      console.log(err);
      // return throwError(err.message);
    });
  }

  reloadData() {
    this.gpService.getAllDimGeneralParameters().subscribe(
      data => {
        console.log("status ", data['status'], JSON.parse(data));

        let dataList = JSON.parse(data);

        for (var index in dataList) {
          this.isEdit = true;
          if (dataList[index].parameter === 'Inter Site Distance (km)') {
            this.pk1 = dataList[index].id;
            this.denseUrban = dataList[index].denseUrban;
            this.subUrban = dataList[index].subUrban;
            this.urban = dataList[index].urban;
            this.rural = dataList[index].rural;
          }
          if (dataList[index].parameter === 'Operating Band (MHz)') {
            this.pk2 = dataList[index].id;
            this.selectedoperating_band = dataList[index].dl;
            this.selectedoperating_band = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Channel Bandwidth (MHz)') {
            this.pk3 = dataList[index].id;
            this.selectedchannel_bandwidth = dataList[index].dl;
            this.selectedchannel_bandwidth = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Channel Model') {
            this.pk4 = dataList[index].id;
            this.selectedchannel_model = dataList[index].dl;
            this.selectedchannel_model = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Cell Load') {
            this.pk5 = dataList[index].id;
            // this.dl = dataList[index].dl;
            // this.ul = dataList[index].ul;
          }
          if (dataList[index].parameter === 'MIMO Settings') {
            this.pk6 = dataList[index].id;
            this.selectedmimo_setting_dl = dataList[index].dl;
            this.selectedmimo_setting_ul = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Scheduler') {
            this.pk7 = dataList[index].id;
            // this.selectedmimo_setting_dl = dataList[index].dl; // Channel aware (RRM SFS)
            this.selectedscheduler_ul = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Extended UL MCS Range') {
            this.pk8 = dataList[index].id;
            // this.selectedextended_dl_mcs_range = dataList[index].dl;  
            this.selectedextended_ul_mcs_range = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Victim Cell Always Fully Loaded (100% PRB utilization)') {
            this.pk9 = dataList[index].id;
            this.selectedvictim_cell_always_fully_loaded = dataList[index].dl;
            this.selectedvictim_cell_always_fully_loaded = dataList[index].ul;
          }
          if (dataList[index].parameter === '6-sector Deployment') {
            this.pk10 = dataList[index].id;
            this.selected_6_sector_deployment = dataList[index].dl;
            this.selected_6_sector_deployment = dataList[index].ul;
          }
          if (dataList[index].parameter === 'Deployment Class') {
            this.pk11 = dataList[index].id;
            this.selecteddeployment_class = dataList[index].dl;
            this.selecteddeployment_class = dataList[index].ul;
          }

        }

      },
      error => console.log("errrrr ", error)
    );
  }

}
