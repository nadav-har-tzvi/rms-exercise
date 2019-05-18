import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourcesManagementPageComponent } from './data-sources-management-page/data-sources-management-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { DataSourceCardComponent } from './data-source-card/data-source-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditableDataSourceCardComponent } from './editable-data-source-card/editable-data-source-card.component';
import { DataSourceEditorComponent } from './data-source-editor/data-source-editor.component';
import { DataSourceSurveyEditorComponent } from './data-source-survey-editor/data-source-survey-editor.component';
import {DataSourceManagerRoutingModule} from './data-source-manager-routing.module';
import {UtilitiesModule} from '../../../utilities/utilities.module';
import {ProgressDialogComponent} from './data-source-survey-editor/progress-dialog.component';

@NgModule({
  declarations: [DataSourcesManagementPageComponent, DataSourceCardComponent, EditableDataSourceCardComponent, DataSourceEditorComponent, DataSourceSurveyEditorComponent, ProgressDialogComponent],
  exports: [
    DataSourcesManagementPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    DataSourceManagerRoutingModule,
    UtilitiesModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [ProgressDialogComponent]
})
export class DataSourcesManagerModule { }
