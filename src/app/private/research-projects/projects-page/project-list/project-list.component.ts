import { Component, OnInit } from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {BehaviorSubject} from 'rxjs';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: BehaviorSubject<ResearchProject[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = new BehaviorSubject<ResearchProject[]>(this.projectsService.projects.value);
    this.projectsService.projects.subscribe(projects => this.projects.next(projects));
  }

}
