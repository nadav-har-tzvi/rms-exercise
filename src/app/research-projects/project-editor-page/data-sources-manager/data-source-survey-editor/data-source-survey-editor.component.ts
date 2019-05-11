import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '../../../../models/data-source';
import {SurveyCreator} from 'survey-creator';
import {DataSourcesService} from '../../../../services/data-sources.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ProgressDialogComponent} from './progress-dialog.component';

@Component({
  selector: 'app-data-source-survey-editor',
  templateUrl: './data-source-survey-editor.component.html',
  styleUrls: ['./data-source-survey-editor.component.css']
})
export class DataSourceSurveyEditorComponent implements OnInit {

  @Input() dataSource: DataSource;

  builder: SurveyCreator;

  constructor(private dataSourceService: DataSourcesService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.builder = new SurveyCreator('survey-editor');
    this.builder.saveSurveyFunc = this.surveySaved;
  }

  surveySaved = () => {
    const surveyJson = this.builder.text;
    const surveyData = JSON.parse(surveyJson);
    this.dialog.open(ProgressDialogComponent);
    this.dataSourceService.saveDataSourceConfiguration(this.dataSource.id, surveyData).subscribe(() => this.dialog.closeAll(), error => {
      this.snackBar.open('An error occured!', 'dismiss', {duration: 1500});
    });
  }

}


