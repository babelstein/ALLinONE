import { TestBed } from '@angular/core/testing';

import { MyRowService } from './my-row.service';

describe('MyRowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRowService = TestBed.get(MyRowService);
    expect(service).toBeTruthy();
  });
});
