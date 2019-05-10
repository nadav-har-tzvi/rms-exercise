import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectStatus, ResearchProject} from '../models/research-project';
import {DataSourcesService} from './data-sources.service';
import {LabelledEntityService} from './labelled-entity-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements LabelledEntityService {

  private readonly projects: ResearchProject[];

  constructor(private http: HttpClient, private dataSourcesService: DataSourcesService) {
    this.projects = [
      new ResearchProject(1, 'Your mother', new Date(), '', ProjectStatus.Pending),
      new ResearchProject(2, 'A cat', new Date(), '', ProjectStatus.Created),
      new ResearchProject(3, 'Fink', new Date(), '', ProjectStatus.Pending),
      new ResearchProject(4, 'Clop', new Date(), '', ProjectStatus.Completed),
    ];
  }

  get allProjects(): ResearchProject[] {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.allProjects.find(project => project.id === id);
  }

  getDataSources(projectId: number) {
    return this.dataSourcesService.getDataSourcesForProject(projectId);
  }

  getLabelById(id: number) : string {
    const project = this.getProjectById(id);
    return project.title;
  }
}
