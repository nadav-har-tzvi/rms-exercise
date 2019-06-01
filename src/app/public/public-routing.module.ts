import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {FooterOnlyLayoutComponent} from '../common-utils/layouts/footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: FooterOnlyLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
        data: {
          breadcrumb: 'Login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
