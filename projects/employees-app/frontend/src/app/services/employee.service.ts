import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../types/employee.interface';
import { GetEmployeesResponseInterface } from '../types/get-employees.response';

const api = environment.apiUrl + '/employees';

@Injectable()
export class EmployeeService {
  public employees: Employee[] = [];

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<GetEmployeesResponseInterface> {
    return this.http.get<GetEmployeesResponseInterface>(`${api}`);
  }

  public createEmployee(employee: Partial<Employee>): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${api}`, { employee });
  }

  public updateEmployee(employeeId: string, employee: Partial<Employee>) {
    return this.http.put<{ id: number }>(`${api}/${employeeId}`, { employee });
  }

  public deleteEmployee(employeeId: string): Observable<{ id: number }> {
    return this.http.delete<{ id: number }>(`${api}/${employeeId}`);
  }
}
