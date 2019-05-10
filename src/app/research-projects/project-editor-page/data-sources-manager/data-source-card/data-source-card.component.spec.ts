import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceCardComponent } from './data-source-card.component';

describe('DataSourceCardComponent', () => {
  let component: DataSourceCardComponent;
  let fixture: ComponentFixture<DataSourceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSourceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
