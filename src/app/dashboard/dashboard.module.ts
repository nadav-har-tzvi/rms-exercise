import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {MatCardModule, MatListModule, MatProgressBarModule, MatTableModule, MatTooltipModule} from '@angular/material';
import { TopActiveSurveysComponent } from './top-active-surveys/top-active-surveys.component';
import {FlexModule} from '@angular/flex-layout';
import { SurveyCostEstimationComponent } from './survey-cost-estimation/survey-cost-estimation.component';
import {RecentProjectsComponent} from './recent-projects/recent-projects.component';

@NgModule({
  declarations: [RecentProjectsComponent, DashboardPageComponent, TopActiveSurveysComponent, SurveyCostEstimationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressBarModule,
    FlexModule
  ]
})
export class DashboardModule { }
