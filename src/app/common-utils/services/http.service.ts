import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EndpointAction, EndpointsConfig, EntityType} from '../utilities/endpoints-config';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  list<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T[]> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.List, urlParams, queryParams);
    return this.http.get<T[]>(config.url, {
      headers: this.createHeaders()
    });
  }

  retrieve<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Retrieve, urlParams, queryParams);
    return this.http.get<T>(config.url, {
      headers: this.createHeaders()
    });
  }

  delete<T>(entityType: EntityType, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<any> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Delete, urlParams, queryParams);
    return this.http.delete(config.url, {
      headers: this.createHeaders()
    });
  }

  create<T>(entityType: EntityType, body: any, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Create, urlParams, queryParams);
    return this.http.post<T>(config.url, body, {
      headers: this.createHeaders()
    }).pipe(share());
  }

  update<T>(entityType: EntityType, body: any, urlParams?: {[k: string]: string}, queryParams?: {[k: string]: string}): Observable<T> {
    const config = EndpointsConfig.getHttpConfig(entityType, EndpointAction.Update, urlParams, queryParams);
    return this.http.put<T>(config.url, body, {
      headers: this.createHeaders()
    }).pipe(share());
  }
}
