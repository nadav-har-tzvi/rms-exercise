import { Component, OnInit } from '@angular/core';
import {Survey, SurveyStatus} from '../../models/survey';

@Component({
  selector: 'app-survey-cost-estimation',
  templateUrl: './survey-cost-estimation.component.html',
  styleUrls: ['./survey-cost-estimation.component.css']
})
export class SurveyCostEstimationComponent implements OnInit {
  surveys: Survey[];
  displayedColumns = ['title', 'loi', 'estimated_cost', 'cost_per_respondent', 'last_updated'];

  constructor() {
    this.surveys = [
      new Survey(1, 'asdas', SurveyStatus.Created, 100, 5, 1, new Date(), new Date()),
      new Survey(2, 'asdas2', SurveyStatus.Active, 50, 10, 1, new Date(), new Date()),
      new Survey(3, 'asdas3', SurveyStatus.Ready, 10, 20, 2, new Date(), new Date()),
      new Survey(4, 'asdas4', SurveyStatus.Closed, 200, 30, 2, new Date(), new Date()),
    ];
  }

  getSurveyTotalCostEstimation(survey: Survey) {
    return survey.loi * 100;
  }

  getSurveyCostEstimationPerRespondent(survey: Survey) {
    return this.getSurveyTotalCostEstimation(survey) / survey.respondentsGoal;
  }

  getLastUpdated(survey: Survey) {
    return new Date();
  }

  ngOnInit() {
  }

}
