import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-layout',
  templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.css']
})
export class SideNavLayoutComponent {

  opened = false;

  constructor() { }

  toggleMenu() {
    this.opened = !this.opened;
  }

}
