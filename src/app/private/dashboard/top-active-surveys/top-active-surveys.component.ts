import { Component, OnInit } from '@angular/core';
import {Survey, SurveyStatus} from '../../models/survey';
import {ProjectsService} from '../../services/projects.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataSourcesService} from '../../services/data-sources.service';

@Component({
  selector: 'app-top-active-surveys',
  templateUrl: './top-active-surveys.component.html',
  styleUrls: ['./top-active-surveys.component.css']
})
export class TopActiveSurveysComponent implements OnInit {

  displayedColumns = ['title', 'project', 'respondents_number', 'respondents_progress', 'last_updated'];
  surveys: Observable<Survey[]>;

  constructor(private projectsService: ProjectsService, private dataSourceService: DataSourcesService) {
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
    return survey.statusChanged;
  }

  ngOnInit() {
    this.surveys = this.dataSourceService.dataSources;
  }

}
