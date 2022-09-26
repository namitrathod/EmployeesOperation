import { EmployeeOperationsService } from './../../servies/employee-operations.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  ename: string = "";
  job: string = "";
  email: string = "";
  salary:string = ""
  constructor(private http: HttpClient, private empOperations: EmployeeOperationsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  createemployee(){
        console.log("ename:", this.ename);
        console.log("job:", this.job);
        console.log("email:", this.email);
        console.log("salary:", this.salary);

      
    if(!this.ename || !this.job || !this.email || !this.salary){
      alert("data is missing for some feilds");
      return;
    }
    const employee ={
      ename: this.ename,
      job: this.job,
      email: this.email,
      salary: this.salary,
    }

      this.http.post("http://localhost:5000/employees", employee)
      .subscribe({
        next: (data: any)=>{
          console.log(data)
          this.toastr.success("Employee Created", 'Success');
          this.clearform();
          this.empOperations.getallemployees()
          .subscribe({
            next: (data) =>{
              this.empOperations.employeesList = data;
              
            },
            error: () =>{},
            complete: () =>{},
          })
        },
        error: ()=>{},
        complete: ()=>{},
      })
    }


  clearform(){
    this.ename = '';
    this.job = '';
    this.email = '';
    this.salary = '';
    }

}
