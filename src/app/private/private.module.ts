import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ResearchProjectsModule} from './research-projects/research-projects.module';
import {NavComponent} from './nav/nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';
import {CommonUtilsModule} from '../common-utils/common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonUtilsModule,
    // DashboardModule,
    // ResearchProjectsModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
