import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableDataSourceCardComponent } from './editable-data-source-card.component';

describe('EditableDataSourceCardComponent', () => {
  let component: EditableDataSourceCardComponent;
  let fixture: ComponentFixture<EditableDataSourceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableDataSourceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableDataSourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
