import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Survey Management System - Dashboard';

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.currentTitle = this.title;
  }

}
