import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavLayoutComponent } from './layouts/side-nav-layout/side-nav-layout.component';
import { FooterOnlyLayoutComponent } from './layouts/footer-only-layout/footer-only-layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [SideNavLayoutComponent, FooterOnlyLayoutComponent, FooterComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CommonUtilsModule { }
