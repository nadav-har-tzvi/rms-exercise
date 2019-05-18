import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasicDetailsComponent } from './survey-basic-details.component';

describe('ProjectBasicDetailsComponent', () => {
  let component: ProjectBasicDetailsComponent;
  let fixture: ComponentFixture<ProjectBasicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBasicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
