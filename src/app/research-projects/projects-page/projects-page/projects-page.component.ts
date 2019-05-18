import { Component, OnInit } from '@angular/core';
import {NavService} from '../../../nav/nav.service';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {



  constructor(private navService: NavService) { }
  public title = 'Market Research > Projects';
  ngOnInit() {
    this.navService.currentTitle = this.title;
  }

}
