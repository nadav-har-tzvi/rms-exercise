import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule,
  MatStepperModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {ProjectBasicDetailsComponent} from './project-basic-details/project-basic-details.component';
import {ProjectEditPageComponent} from './project-edit-page/project-edit-page.component';
import {FlexModule} from '@angular/flex-layout';
import {DataSourcesManagerModule} from './data-sources-manager/data-sources-manager.module';
import {ProjectEditorPageRoutingModule} from './project-editor-page-routing.module';

@NgModule({
  declarations: [ProjectEditPageComponent, ProjectBasicDetailsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MaterialFileInputModule,
    FormsModule,
    FlexModule,
    DataSourcesManagerModule,
    MatTabsModule,
    MatSnackBarModule,
    ProjectEditorPageRoutingModule
  ]
})
export class ProjectEditorPageModule { }
