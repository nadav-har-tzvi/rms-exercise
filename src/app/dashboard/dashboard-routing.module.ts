import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
