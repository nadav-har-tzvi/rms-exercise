import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResearchProjectsRoutingModule} from './research-projects-routing.module';
import {ProjectEditorPageModule} from './project-editor-page/project-editor-page.module';
import {ProjectsPageModule} from './projects-page/projects-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResearchProjectsRoutingModule,
    ProjectsPageModule,
    ProjectEditorPageModule
  ]
})
export class ResearchProjectsModule { }
