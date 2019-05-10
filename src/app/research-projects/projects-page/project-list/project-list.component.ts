import { Component, OnInit, HostListener } from '@angular/core';
import {ResearchProject} from '../../../models/research-project';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {ProjectsService} from '../../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ResearchProject[];
  maxProjectsInRow = 4;
  rows: number[];
  projectCardWidth: number;

  constructor(projectsService: ProjectsService) {
    this.projectCardWidth = 100 / this.maxProjectsInRow;
    this.projects = projectsService.allProjects;
  }

  getProjectsInRow(rowNumber: number) {
    const projectsStartIdx = rowNumber * this.maxProjectsInRow;
    const projectsEndIdx = (rowNumber + 1) * this.maxProjectsInRow;
    return this.projects.slice(projectsStartIdx, projectsEndIdx);
  }

  ngOnInit() {
    let numRows = this.projects.length / this.maxProjectsInRow;
    if (this.projects.length % this.maxProjectsInRow > 0) {
      numRows += 1;
    }
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(i);
    }
    this.rows = rows;

  }

}
