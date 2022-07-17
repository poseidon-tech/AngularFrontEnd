import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private base_url ="http://angularwebapp-env.eba-zc6cz8t2.us-west-1.elasticbeanstalk.com/employees"
  constructor(private httpClient: HttpClient) 
  { }
  getEmployeesList(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.base_url+"");
  }
  getEmployeeById(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(this.base_url+"/"+id);
  }
  createEmployee(employee: Employee):Observable<Object>
  {
    return this.httpClient.post(this.base_url,employee);
  }
  updateEmployeeById(id: number,employee: Employee):Observable<Object>
  {
    return this.httpClient.put(this.base_url+"/"+id,employee);
  }
  deleteEmployeeById(id: number):Observable<Object>
  {
    return this.httpClient.delete(this.base_url+"/"+id);
  }
}
