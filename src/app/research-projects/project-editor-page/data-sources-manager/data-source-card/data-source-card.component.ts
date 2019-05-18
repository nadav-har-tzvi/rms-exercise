import {Component, Input, OnInit} from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-data-source-card',
  templateUrl: './data-source-card.component.html',
  styleUrls: ['./data-source-card.component.css']
})
export class DataSourceCardComponent implements OnInit {

  @Input() survey: Survey;

  constructor() { }

  ngOnInit() {
  }

}
