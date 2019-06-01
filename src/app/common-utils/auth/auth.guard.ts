import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.auth.isAuthenticated();
    if (!isAuthenticated && this.router.url !== '/p/login') {
      this.router.navigate(['/p/login']);
    }
    return isAuthenticated;
  }
}
