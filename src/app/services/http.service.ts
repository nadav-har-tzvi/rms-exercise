import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EndpointAction, EndpointsConfig, EntityType} from '../utilities/endpoints-config';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  list<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T[]> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.List, urlParams, queryParams);
    return this.http.get<T[]>(config.url);
  }

  retrieve<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Retrieve, urlParams, queryParams);
    return this.http.get<T>(config.url);
  }

  delete<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<any> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Delete, urlParams, queryParams);
    return this.http.delete(config.url);
  }

  create<T>(entityType: EntityType, body: any, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Create, urlParams, queryParams);
    return this.http.post<T>(config.url, body).pipe(share());
  }

  update<T>(entityType: EntityType, body: any, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Update, urlParams, queryParams);
    return this.http.put<T>(config.url, body).pipe(share());
  }
}
