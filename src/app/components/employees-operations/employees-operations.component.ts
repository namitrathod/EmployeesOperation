import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-operations',
  templateUrl: './employees-operations.component.html',
  styleUrls: ['./employees-operations.component.css']
})
export class EmployeesOperationsComponent implements OnInit {
formflag = "create";
currentEmp = {};
  constructor() { }

  ngOnInit(): void {
  }
  editEmployee(emp: any){
    console.log(emp);
    this.formflag = 'update';
    this.currentEmp = {...emp};
  }
  cancelUpdateForm(data:any){
    this.formflag = "create";
  }
}
