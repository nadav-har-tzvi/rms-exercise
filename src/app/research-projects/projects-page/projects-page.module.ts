import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectListComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    FlexModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ]
})
export class ProjectsPageModule { }
