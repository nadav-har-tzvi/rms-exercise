import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopActiveSurveysComponent } from './top-active-surveys.component';

describe('TopActiveSurveysComponent', () => {
  let component: TopActiveSurveysComponent;
  let fixture: ComponentFixture<TopActiveSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopActiveSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopActiveSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
