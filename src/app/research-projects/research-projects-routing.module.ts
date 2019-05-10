import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectEditPageComponent} from './project-editor-page/project-edit-page/project-edit-page.component';
import {ProjectListComponent} from './projects-page/project-list/project-list.component';
import {ProjectsPageComponent} from './projects-page/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsPageComponent,
    data: {
      breadcrumb: 'Projects'
    },
    children: [
      {
        path: '',
        component: ProjectListComponent
      },
      {
        path: 'new',
        component: ProjectEditPageComponent,
        data: {
          breadcrumb: 'new'
        }
      },
      {
        path: ':projectId',
        component: ProjectEditPageComponent,
        data: {
          breadcrumb: ':projectId'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchProjectsRoutingModule { }
