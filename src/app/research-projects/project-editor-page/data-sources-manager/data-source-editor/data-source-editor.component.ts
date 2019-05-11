import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '../../../../models/data-source';
import {ActivatedRoute} from '@angular/router';
import {DataSourcesService} from '../../../../services/data-sources.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-data-source-editor',
  templateUrl: './data-source-editor.component.html',
  styleUrls: ['./data-source-editor.component.css']
})
export class DataSourceEditorComponent implements OnInit {

  dataSource: Observable<DataSource>;

  constructor(private activeRoute: ActivatedRoute, private dataSourcesService: DataSourcesService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.dataSource = this.dataSourcesService.getDataSourceById(parseInt(params.dataSourceId, 10));
    });
  }

}
