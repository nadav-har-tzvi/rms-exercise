import {Injectable} from '@angular/core';
import {ResearchProject} from '../models/research-project';
import {DataSourcesService} from './data-sources.service';
import {LabelledEntityService} from '../../common-utils/services/labelled-entity-service';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataSource} from '../models/data-source';
import {HttpService} from '../../common-utils/services/http.service';
import {map} from 'rxjs/operators';
import {filter} from 'rxjs/internal/operators/filter';
import * as _ from 'lodash';
import {EntityType} from '../../common-utils/utilities/endpoints-config';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements LabelledEntityService {

  public projects: BehaviorSubject<ResearchProject[]>;

  constructor(private dataSourcesService: DataSourcesService, private http: HttpService) {
    this.projects = new BehaviorSubject<ResearchProject[]>([]);
    const fetchingProjects$ = http.list<ResearchProject>(EntityType.Project);
    fetchingProjects$.subscribe(projects => this.projects.next(projects));
  }

  getProjectById(id: number): Observable<ResearchProject> {
    return this.projects.pipe(
      map(projects => projects.find(project => project.id === id) || null),
      filter(project => project !== null)
    );
  }

  getDataSources(projectId: number) : Observable<DataSource[]> {
    return this.dataSourcesService.getDataSourcesForProject(projectId);
  }

  getLabelById(id: number) : Observable<string> {
    return this.getProjectById(id).pipe(map(project => project.title));
  }

  createProject(project: ResearchProject) : Observable<ResearchProject> {
    const obs = this.http.create<ResearchProject>(EntityType.Project, project);
    obs.subscribe(newProject => {
      const currentProjects = this.projects.value;
      currentProjects.push(newProject);
      this.projects.next(currentProjects);
    });
    return obs;
  }

  updateProject(project: ResearchProject) : Observable<ResearchProject> {
    return this.http.update(EntityType.Project, project, {projectId: project.id.toString()});
  }

  deleteProject(project: ResearchProject) {
    this.http.delete(EntityType.Project, {projectId: project.id.toString()}).subscribe(() => {
      const currentProjects = this.projects.value;
      const newProjects = _.remove(currentProjects, proj => proj.id !== project.id);
      this.projects.next(newProjects);
    });
  }
}
