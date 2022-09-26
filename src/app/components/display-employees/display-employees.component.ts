import { ToastrService } from 'ngx-toastr';
import { EmployeeOperationsService } from './../../servies/employee-operations.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
  // employeesList:any = [];
  @Output()  onEmpEditEvent : EventEmitter <any>;
  constructor(public empOperations: EmployeeOperationsService, private toastr: ToastrService) { 
    this.onEmpEditEvent = new EventEmitter();
  }

  ngOnInit(): void {
  this.empOperations.getallemployees()
  .subscribe({
    next: (data:any)=>{
      // console.log("Data:",data);
      this.empOperations.employeesList = data;
    },
    error: ()=>{},
    complete: ()=>{},
  })
  }

  deleteEmp(emp:any){
      this.empOperations.deleteEmp(emp._id)
      .subscribe({
        next: (data: any)=>{
          console.log(data);
          this.empOperations.employeesList = data;
          this.toastr.success("Employee successfully", "Deleted");
          this.empOperations.getallemployees()
          .subscribe({
            next: (data)=>{
              this.empOperations.employeesList = data;
            },
            error: ()=>{},
            complete: ()=>{},
          })
        },
        error: ()=>{},
        complete: ()=>{},
      })
  }
  editEmployee(emp:any){
    alert(emp._id);
    console.log(emp);
    this.onEmpEditEvent.emit(emp);
  }
}
