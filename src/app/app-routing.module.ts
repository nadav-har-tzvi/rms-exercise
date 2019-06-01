import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './common-utils/auth/auth.guard';
import {SideNavLayoutComponent} from './common-utils/layouts/side-nav-layout/side-nav-layout.component';
import {PrivateModule} from './private/private.module';
import {FooterOnlyLayoutComponent} from './common-utils/layouts/footer-only-layout/footer-only-layout.component';
import {PublicModule} from './public/public.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/a/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: 'a',
    component: SideNavLayoutComponent,
    loadChildren: () => PrivateModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'p',
    component: FooterOnlyLayoutComponent,
    loadChildren: () => PublicModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true  } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
