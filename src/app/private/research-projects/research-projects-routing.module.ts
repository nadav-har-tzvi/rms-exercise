import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectEditPageComponent} from './project-editor-page/project-edit-page/project-edit-page.component';
import {ProjectListComponent} from './projects-page/project-list/project-list.component';
import {ProjectsPageComponent} from './projects-page/projects-page/projects-page.component';
import {DataSourceEditorComponent} from './project-editor-page/data-sources-manager/data-source-editor/data-source-editor.component';

const routes: Routes = [
  {
    path: '',
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
  },
  {
    path: ':projectId/datasources/:dataSourceId',
    component: DataSourceEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchProjectsRoutingModule { }
