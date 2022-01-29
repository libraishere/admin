import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myproject';
  sideBarOpen = true;
  ngOnInit(){}

  sidebarToggle(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(public router: Router){}

}


