import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataSourceCardComponent} from '../data-source-card/data-source-card.component';
import {DataSource, DataSourceType} from '../../../../models/data-source';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Survey, SurveyStatus } from 'src/app/models/survey';

@Component({
  selector: 'app-editable-data-source-card',
  templateUrl: './editable-data-source-card.component.html',
  styleUrls: ['./editable-data-source-card.component.css']
})
export class EditableDataSourceCardComponent extends DataSourceCardComponent {

  dataSourceTypes = [];
  dataSourceTypeControl = new FormControl('', [Validators.required]);
  surveyRespondentsGoal = new FormControl('', [Validators.required, Validators.min(50)])
  projectId: number;

  @Output() surveySaved = new EventEmitter<Survey>();

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    Object.keys(DataSourceType).forEach(dsType => {
      this.dataSourceTypes.push(dsType);
    });
    this.activatedRoute.params.subscribe(params => {
      this.projectId = parseInt(params.projectId, 10);
    });
  }

  saveDataSource(f: NgForm) {
    if (f.valid) {
      const newSurvey = new Survey(
        null,
        f.value.dataSourceName,
        SurveyStatus.Created,
        f.value.surveyRespondentsGoal,
        null,
        this.projectId,
        null,
        null,
        null
      );
      this.surveySaved.emit(newSurvey);
    }
  }

}
