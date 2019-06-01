import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCostEstimationComponent } from './survey-cost-estimation.component';

describe('SurveyCostEstimationComponent', () => {
  let component: SurveyCostEstimationComponent;
  let fixture: ComponentFixture<SurveyCostEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCostEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCostEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
