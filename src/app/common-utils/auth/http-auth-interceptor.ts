import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(() => {},
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          } else {
            this.router.navigate(['/p/login']);
          }
        }
      }));
  }
}
