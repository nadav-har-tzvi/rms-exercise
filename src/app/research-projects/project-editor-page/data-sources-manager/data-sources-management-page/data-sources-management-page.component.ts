import {Component, Input, OnInit} from '@angular/core';
import {ResearchProject} from '../../../../models/research-project';
import {DataSource} from '../../../../models/data-source';
import * as _ from 'lodash';
import {DataSourcesService} from '../../../../services/data-sources.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-data-sources-management-page',
  templateUrl: './data-sources-management-page.component.html',
  styleUrls: ['./data-sources-management-page.component.css']
})
export class DataSourcesManagementPageComponent implements OnInit {

  @Input() project: ResearchProject;
  dataSources: Observable<DataSource[]>;
  newDataSource: DataSource;

  constructor(private dataSourceService: DataSourcesService) { }

  ngOnInit() {
    this.dataSources = this.dataSourceService.dataSources;
  }

  addDataSource() {
    this.newDataSource = new DataSource();
  }

  saveDataSource(dataSource: DataSource) {
    this.dataSourceService.addDataSource(dataSource);
    this.newDataSource = null;
  }

}
