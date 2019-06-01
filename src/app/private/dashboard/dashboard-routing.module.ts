import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {AuthGuard} from '../../common-utils/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
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
