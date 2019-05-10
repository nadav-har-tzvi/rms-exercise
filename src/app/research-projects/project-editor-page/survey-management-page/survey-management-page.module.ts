import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyManagementPageComponent } from './survey-management-page/survey-management-page.component';
import { SurveysListComponent } from './surveys-list/surveys-list.component';
import { SurveyEditorComponent } from './survey-editor/survey-editor.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SurveyManagementPageComponent, SurveysListComponent, SurveyEditorComponent],
  exports: [
    SurveyManagementPageComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatChipsModule,
    RouterModule
  ]
})
export class SurveyManagementPageModule { }
