import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourcesManagementPageComponent } from './data-sources-management-page/data-sources-management-page.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { DataSourceCardComponent } from './data-source-card/data-source-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditableDataSourceCardComponent } from './editable-data-source-card/editable-data-source-card.component';

@NgModule({
  declarations: [DataSourcesManagementPageComponent, DataSourceCardComponent, EditableDataSourceCardComponent],
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
    ReactiveFormsModule
  ]
})
export class DataSourcesManagerModule { }
