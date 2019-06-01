import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataSourceEditorComponent} from './data-source-editor/data-source-editor.component';

const routes: Routes = [
  {
    path: 'projects/:projectId/datasources/:dataSourceId',
    component: DataSourceEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSourceManagerRoutingModule { }
