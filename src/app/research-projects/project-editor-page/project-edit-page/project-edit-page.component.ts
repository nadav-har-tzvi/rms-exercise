import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResearchProject} from '../../../models/research-project';
import {ProjectsService} from '../../../services/projects.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {NavService} from '../../../nav/nav.service';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.css']
})
export class ProjectEditPageComponent implements OnInit {


  project: ResearchProject;

  constructor(private projectsService: ProjectsService, private activeRoute: ActivatedRoute, private navService: NavService) {}

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      if (params.projectId) {
        this.project = this.projectsService.getProjectById(parseInt(params.projectId, 10));
      } else {
        this.project = new ResearchProject();
      }
      this.navService.currentTitle += ' > ' + this.project.title;
    });
  }

}
