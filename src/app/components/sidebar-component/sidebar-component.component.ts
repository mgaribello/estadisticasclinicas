import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css'],
})
export class SidebarComponentComponent implements OnInit {
  //faBars = faBars;
  constructor() {}

  ngOnInit(): void {}

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
