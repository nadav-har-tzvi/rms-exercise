import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '../../../../models/data-source';

@Component({
  selector: 'app-data-source-card',
  templateUrl: './data-source-card.component.html',
  styleUrls: ['./data-source-card.component.css']
})
export class DataSourceCardComponent implements OnInit {

  @Input() dataSource: DataSource;

  constructor() { }

  ngOnInit() {
  }

}
