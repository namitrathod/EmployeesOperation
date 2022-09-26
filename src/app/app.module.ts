import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';
import { CreateEmployeesComponent } from './components/create-employees/create-employees.component';
import { EmployeesOperationsComponent } from './components/employees-operations/employees-operations.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmployeesComponent,
    CreateEmployeesComponent,
    EmployeesOperationsComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
