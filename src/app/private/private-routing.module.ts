import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {ResearchProjectsModule} from './research-projects/research-projects.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'projects',
    loadChildren: () => ResearchProjectsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
