import { TestBed } from '@angular/core/testing';

import { EmployeeOperationsService } from './employee-operations.service';

describe('EmployeeOperationsService', () => {
  let service: EmployeeOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
