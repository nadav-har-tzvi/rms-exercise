import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NavService} from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  opened = false;

  constructor(private breakpointObserver: BreakpointObserver, private service: NavService) {}

  toggleMenu() {
    this.opened = !this.opened;
  }

}
