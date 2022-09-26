
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeOperationsService {
  employeesList:any = [];

  constructor(private http: HttpClient) { }
  getallemployees(){
    return this.http.get("http://localhost:5000/employees");
  }
  createEmployees(employee: any){
    console.log("employee:", employee);
    return this.http.post("http://localhost:5000/employees", employee);
  }
  deleteEmp(id:any){
    alert(id);
    return this.http.delete('http://localhost:5000/employees/'+id);
}

  updateEmployee(emp:any){
    return this.http.put("http://localhost:5000/employees/"+emp._id , emp);
}
}
