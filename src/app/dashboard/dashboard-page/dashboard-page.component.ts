import { Component, OnInit } from '@angular/core';
import {NavService} from '../../nav/nav.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private navService: NavService) { }
  public title = 'Market Research > Dashboard';
  ngOnInit() {
    this.navService.currentTitle = this.title;
  }

}
