import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceSurveyEditorComponent } from './data-source-survey-editor.component';

describe('DataSourceSurveyEditorComponent', () => {
  let component: DataSourceSurveyEditorComponent;
  let fixture: ComponentFixture<DataSourceSurveyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSourceSurveyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourceSurveyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
