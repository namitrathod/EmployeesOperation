import { EmployeeOperationsService } from './../../servies/employee-operations.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() emp: any;
  @Output() oncancelUpdateEevent : EventEmitter<any>;
  constructor(public empOperations :EmployeeOperationsService, private toastr: ToastrService) { 
    this.oncancelUpdateEevent = new EventEmitter;
  }

  ngOnInit(): void {
  }
  cancelUpdateForm(){
   this.oncancelUpdateEevent.emit();
  }
  updateEmp(){
    console.log("emp: ", this.emp);
    this.empOperations.updateEmployee(this.emp)
    .subscribe({
      next: (data: any)=>{
        console.log("result",data);
        this.toastr.success("Updated Employee", "successfully");
        this.empOperations.getallemployees()
        .subscribe({
          next : (data)=>{
            console.log("data:",data)
            this.empOperations.employeesList = data;
            this.cancelUpdateForm();
          },
          error : ()=>{},
          complete : ()=>{},

        })
      },
      error: ()=>{},
      complete: ()=>{},
    })
  }

}
