import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ProjectEditPageComponent} from './project-edit-page.component';


describe('SurveyEditFormComponent', () => {
  let component: ProjectEditPageComponent;
  let fixture: ComponentFixture<ProjectEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
