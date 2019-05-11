import { Component, OnInit } from '@angular/core';
import {Survey, SurveyStatus} from '../../models/survey';
import {ProjectsService} from '../../services/projects.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-top-active-surveys',
  templateUrl: './top-active-surveys.component.html',
  styleUrls: ['./top-active-surveys.component.css']
})
export class TopActiveSurveysComponent implements OnInit {

  displayedColumns = ['title', 'project', 'respondents_number', 'respondents_progress', 'last_updated'];
  surveys: Survey[];

  constructor(private projectsService: ProjectsService) {
    this.surveys = [
      new Survey('asda', 'asdas', [], SurveyStatus.Created, 100, 5, 1, new Date(), new Date()),
      new Survey('asda2', 'asdas2', [], SurveyStatus.Active, 300, 10, 1, new Date(), new Date()),
      new Survey('asda3', 'asdas3', [], SurveyStatus.Ready, 150, 20, 2, new Date(), new Date()),
      new Survey('asda4', 'asdas4', [], SurveyStatus.Closed, 50, 30, 2, new Date(), new Date()),
    ];
  }

  getProjectTitle(projectId: number): Observable<string> {
    return this.projectsService.getProjectById(projectId).pipe(map(project => project.title));
  }

  getSurveyRespondentsPercentage(survey: Survey) {
    return (this.getSurveyRespondentsCount(survey) / survey.respondentsGoal) * 100;
  }

  getSurveyRespondentsCount(survey: Survey) {
    return 50;
  }

  getLastUpdated(survey: Survey) {
    return new Date();
  }

  ngOnInit() {
  }

}
