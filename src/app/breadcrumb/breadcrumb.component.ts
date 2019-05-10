import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Breadcrumb} from './breadcrumb';
import {Observable} from 'rxjs';
import {ProjectsService} from '../services/projects.service';
import {LabelledEntityService} from '../services/labelled-entity-service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadCrumbs$: Observable<Breadcrumb[]>;
  params = {};
  paramServices: {[key: string]: LabelledEntityService};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.paramServices = {
      projectId: projectsService
    };
  }

  ngOnInit() {

    this.breadCrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(event => {
        this.collectParams(this.activatedRoute);
        return this.buildBreadCrumb(this.activatedRoute.root);
      })
    );
  }

  collectParams(route: ActivatedRoute) {
    route.params.subscribe(p => Object.entries(p).forEach(([k, v]) => this.params[k] = v));
    route.children.forEach(this.collectParams.bind(this));
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
    let newBreadcrumbs = breadcrumbs;
    let nextUrl = url;
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.breadcrumb) {
      let label = route.routeConfig.data.breadcrumb;
      let path = route.routeConfig.path;
      const paramsInPath = path.match(/:\w+/);
      paramsInPath && paramsInPath.forEach(paramStr => {
        const param = paramStr.slice(1);
        path = path.replace(paramStr, this.params[param]);
        label = this.paramServices[param].getLabelById(parseInt(this.params[param], 10));
      });
      nextUrl = `${url}${path}/`;
      const breadcrumb = {
        label,
        url: nextUrl
      };
      newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    }
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
