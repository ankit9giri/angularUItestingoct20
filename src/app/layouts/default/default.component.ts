import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
    console.log("default working");
  }

  sideBarToggler(e) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
