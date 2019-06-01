import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EndpointsConfig, EntityType} from '../utilities/endpoints-config';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  tryAuthenticate(userName: string, password: any): Observable<string> {
    const httpConfig = EndpointsConfig.getHttpConfig(EntityType.User, 'Authenticate');
    return this.http.post<string>(httpConfig.url, {
      username: userName,
      password
    }, {
      headers: new HttpHeaders({Accept: 'text/plain'}),
      responseType: 'text' as 'json'
    }).pipe(
      tap(res => {
        localStorage.setItem('token', res);
      }),
      catchError(err => throwError(err.error))
    );
  }
}
