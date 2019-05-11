import {Injectable} from '@angular/core';
import {DataSource, DataSourceType} from '../models/data-source';
import * as _ from 'lodash';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpRequest} from '@angular/common/http';
import {EndpointAction, EndpointsConfig, EntityType} from '../utilities/endpoints-config';
import {HttpService} from './http.service';
import {switchMap} from 'rxjs/internal/operators/switchMap';


interface DataSourceConfigurator {
  save();
}


class SurveyConfigurator implements DataSourceConfigurator {
  constructor(private dataSource: DataSource, private configuration: any, private http: HttpService) {}

  save(): Observable<DataSource> {
    if (this.dataSource.configuration) {
      return this.http.update<DataSource>(EntityType.Survey, this.configuration);
    } else {
      return this.http.create<DataSource>(EntityType.Survey, this.configuration);
    }
  }
}



@Injectable({
  providedIn: 'root'
})
export class DataSourcesService {

  dataSources: BehaviorSubject<DataSource[]>;

  constructor(private http: HttpService) {
    this.dataSources = new BehaviorSubject<DataSource[]>([]);
  }

  getDataSourcesForProject(projectId: number): Observable<DataSource[]> {
    return this.dataSources.pipe(map(dsArray => dsArray.filter(ds => ds.projectId === projectId)));
  }

  addDataSource(dataSource: DataSource) {
    const currentDataSources = this.dataSources.getValue();
    const maxId = _.max(currentDataSources.map(ds => ds.id)) || 0;
    dataSource.id = maxId + 1;
    currentDataSources.push(dataSource);
    this.dataSources.next(currentDataSources);
  }

  getDataSourceById(id: number): Observable<DataSource> {
    return this.dataSources.pipe(map(dsArray => dsArray.find(ds => ds.id === id)));
  }

  saveDataSourceConfiguration(dataSourceId: number, configuration: any) {
      return this.getDataSourceById(dataSourceId).pipe(
        map(ds => {
          switch (ds.type) {
            case DataSourceType.Survey:
              return new SurveyConfigurator(ds, configuration, this.http);
            case DataSourceType.Social:
              throw new Error('Social configuration isn\'t supported!');
          }
        }),
        switchMap(configurator => configurator.save())
      );
  }
}
