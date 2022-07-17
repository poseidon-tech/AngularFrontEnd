import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"",redirectTo:"employees",pathMatch:'full'},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"update-employee/:id",component:UpdateEmployeeComponent},
  {path:"delete-employee/:id",component:DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
