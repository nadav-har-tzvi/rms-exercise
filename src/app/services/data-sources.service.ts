import {Injectable} from '@angular/core';
import {DataSource, DataSourceType} from '../models/data-source';
import * as _ from 'lodash';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {EntityType} from '../utilities/endpoints-config';
import {HttpService} from './http.service';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import { Survey } from '../models/survey';


interface DataSourceConfigurator {
  save();
}


class SurveyConfigurator implements DataSourceConfigurator {
  constructor(private dataSource: DataSource, private configuration: any, private http: HttpService) {}

  save(): Observable<DataSource> {
    if (this.dataSource.configuration) {

    } else {
      return this.http.create<DataSource>(EntityType.DataSource, this.configuration);
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
    http.list<Survey>(EntityType.Survey).subscribe(datasources => this.dataSources.next(datasources));
  }

  getDataSourcesForProject(projectId: number): Observable<DataSource[]> {
    return this.dataSources.pipe(map(dsArray => dsArray.filter(ds => ds.projectId === projectId)));
  }

  addDataSource(dataSource: DataSource) {
    this.http.create<Survey>(EntityType.Survey, dataSource).subscribe(newDataSource => {
      const currentDataSources = this.dataSources.getValue();
      currentDataSources.push(newDataSource);
      this.dataSources.next(currentDataSources);
    });

  }

  getDataSourceById(id: number): Observable<DataSource> {
    return this.dataSources.pipe(map(dsArray => dsArray.find(ds => ds.id === id)));
  }

  saveDataSourceConfiguration(dataSourceId: number, configuration: any): Observable<DataSource> {
    let newDataSources: DataSource[] = [];
    return new Observable<Survey>(observer => {
      this.getDataSourceById(dataSourceId).subscribe(
        ds => {
          ds.configuration = JSON.stringify(configuration);
          const obs = this.http.update<Survey>(EntityType.Survey, ds, { dataSourceId: dataSourceId.toString() });
          obs.subscribe(updatedDs => {
            const currentDataSources = this.dataSources.value;
            const dsIdx = currentDataSources.findIndex(dsToFind => dsToFind.id === dataSourceId);
            currentDataSources[dsIdx] = updatedDs;
            newDataSources = currentDataSources;
            observer.next(updatedDs);
          });
        }, console.error, () => {
          this.dataSources.next(newDataSources);
        });
    });
  }
}
