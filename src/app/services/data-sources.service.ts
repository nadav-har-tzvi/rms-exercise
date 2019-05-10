import {Injectable} from '@angular/core';
import {DataSource, DataSourceType} from '../models/data-source';

@Injectable({
  providedIn: 'root'
})
export class DataSourcesService {

  constructor() { }

  getDataSourcesForProject(projectId: number): DataSource[] {
    return projectId % 2 === 0 ? [
      new DataSource('survey1', DataSourceType.Survey, projectId),
      new DataSource('survey2', DataSourceType.Survey, projectId),
      new DataSource('reddit', DataSourceType.Social, projectId),
    ] : [];
  }
}
