import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataSourceCardComponent} from '../data-source-card/data-source-card.component';
import {DataSource, DataSourceType} from '../../../../models/data-source';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editable-data-source-card',
  templateUrl: './editable-data-source-card.component.html',
  styleUrls: ['./editable-data-source-card.component.css']
})
export class EditableDataSourceCardComponent extends DataSourceCardComponent {

  dataSourceTypes = [];
  dataSourceTypeControl = new FormControl('', [Validators.required]);
  projectId: number;

  @Output() dataSourceSaved = new EventEmitter<DataSource>();

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
      this.dataSource.type = f.value.dataSourceType;
      this.dataSource.name = f.value.dataSourceName;
      this.dataSource.projectId = this.projectId;
      this.dataSourceSaved.emit(this.dataSource);
    }
  }

}
