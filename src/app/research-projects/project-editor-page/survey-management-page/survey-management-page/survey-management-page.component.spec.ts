import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyManagementPageComponent } from './survey-management-page.component';

describe('SurveyManagementPageComponent', () => {
  let component: SurveyManagementPageComponent;
  let fixture: ComponentFixture<SurveyManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
