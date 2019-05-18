import { TestBed } from '@angular/core/testing';

import { DataSourcesService } from './data-sources.service';

describe('DataSourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSourcesService = TestBed.get(DataSourcesService);
    expect(service).toBeTruthy();
  });
});
