import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Survey, SurveyStatus} from '../../../../models/survey';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit {

  @Input() surveys: Survey[];

  constructor() {
    this.surveys = [
      new Survey('asda', 'asdas', [], SurveyStatus.Created, 100, 5, 1, new Date(), new Date()),
      new Survey('asda2', 'asdas2', [], SurveyStatus.Active, 300, 10, 1, new Date(), new Date()),
      new Survey('asda3', 'asdas3', [], SurveyStatus.Ready, 150, 20, 2, new Date(), new Date()),
      new Survey('asda4', 'asdas4', [], SurveyStatus.Closed, 50, 30, 2, new Date(), new Date()),
    ];
  }

  @Output() surveySelected: EventEmitter<Survey> = new EventEmitter<Survey>();

  ngOnInit() {
  }
}
