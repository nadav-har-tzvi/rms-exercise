import { Component, OnInit } from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {ProjectsService} from '../../../services/projects.service';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {NavService} from '../../../nav/nav.service';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.css']
})
export class ProjectEditPageComponent implements OnInit {


  project: BehaviorSubject<ResearchProject>;

  constructor(private projectsService: ProjectsService, private activeRoute: ActivatedRoute, private navService: NavService) {}

  ngOnInit() {
    this.project = new BehaviorSubject<ResearchProject>(new ResearchProject());
    this.activeRoute.params.subscribe(params => {
      if (params.projectId) {
        this.projectsService.getProjectById(parseInt(params.projectId, 10)).subscribe(project => this.project.next(project));
      }
    });
  }

}
