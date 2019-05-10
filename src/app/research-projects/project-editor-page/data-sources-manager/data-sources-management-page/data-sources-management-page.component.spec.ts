import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourcesManagementPageComponent } from './data-sources-management-page.component';

describe('DataSourcesManagementPageComponent', () => {
  let component: DataSourcesManagementPageComponent;
  let fixture: ComponentFixture<DataSourcesManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSourcesManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourcesManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
