import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOperationsComponent } from './employees-operations.component';

describe('EmployeesOperationsComponent', () => {
  let component: EmployeesOperationsComponent;
  let fixture: ComponentFixture<EmployeesOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
