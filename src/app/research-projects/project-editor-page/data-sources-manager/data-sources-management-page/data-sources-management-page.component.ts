import {Component, Input, OnInit} from '@angular/core';
import {ResearchProject} from '../../../../models/research-project';
import {DataSource} from '../../../../models/data-source';

@Component({
  selector: 'app-data-sources-management-page',
  templateUrl: './data-sources-management-page.component.html',
  styleUrls: ['./data-sources-management-page.component.css']
})
export class DataSourcesManagementPageComponent implements OnInit {

  @Input() project: ResearchProject;
  dataSources: DataSource[];
  newDataSource: DataSource;

  constructor() { }

  ngOnInit() {
    this.dataSources = [];
  }

  addDataSource() {
    this.newDataSource = new DataSource();
  }

  saveDataSource(dataSource: DataSource) {
    this.dataSources.push(dataSource);
    this.newDataSource = null;
  }

}
