import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {ProjectStatus, ResearchProject} from '../../models/research-project';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css']
})
export class RecentProjectsComponent implements OnInit {
  displayedColumns = ['title', 'dueDate', 'status'];
  projects: ResearchProject[];

  constructor(projectsService: ProjectsService) {
    this.projects = projectsService.allProjects;
  }

  getProjectStatusClass(status: ProjectStatus): string {
    switch (status) {
      case ProjectStatus.Created:
        return 'project-created';
      case ProjectStatus.Pending:
        return 'project-pending';
      case ProjectStatus.Completed:
        return 'project-complete';
    }
  }

  ngOnInit() {
  }

}
