import { TestBed } from '@angular/core/testing';

import { AllCrudsService } from './all-cruds.service';

describe('AllCrudsService', () => {
  let service: AllCrudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCrudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
