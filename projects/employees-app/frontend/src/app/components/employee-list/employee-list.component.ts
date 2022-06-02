import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/types/employee.interface';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeFormModalComponent } from '../employee-form-modal/employee-form-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements AfterViewInit {
  public displayedColumns: string[] = [
    'gender',
    'fullName',
    'address',
    'role',
    'age',
    'isActive',
    'hiredOn',
    'actions'
  ];
  public dataSource = new MatTableDataSource<Employee>(this.service.employees);
  public pagination = {
    total: this.service.employees.length,
    pageSize: 5,
    pageNumber: 0
  };

  constructor(private dialog: MatDialog, private service: EmployeeService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator || null;

    console.log(this.paginator);
  }

  public paginationChanged(ev: any) {
    console.log(ev);
  }

  public createEmployee() {
    const dialogRef = this.dialog.open(EmployeeFormModalComponent, {
      width: '30%',
      data: {
        onEditMode: false
      },
      disableClose: true
    });

    dialogRef
      .afterClosed()
      .pipe(filter(v => !!v))
      .subscribe(result => {
        // wait for backend result
        const id = '1';

        const newEmployee = {
          id,
          ...result
        };
        this.service.employees = [...this.service.employees, newEmployee];
        this.dataSource.data = this.service.employees;
      });
  }

  public editEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormModalComponent, {
      width: '30%',
      data: {
        onEditMode: true,
        employee,
        disableClose: true
      }
    });

    dialogRef
      .afterClosed()
      .pipe(filter(v => !!v))
      .subscribe(result => {
        const employeeIndex = this.service.employees.findIndex(el => el.id === result.id);

        this.service.employees.splice(employeeIndex, 1, result);
        this.dataSource.data = this.service.employees;
      });
  }

  public removeEmployee(employeeId: string, employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeDeleteModalComponent, {
      width: '30%',
      data: {
        employee
      }
    });

    dialogRef
      .afterClosed()
      .pipe(filter(v => !!v))
      .subscribe(result => {
        const employeeIndex = this.service.employees.findIndex(el => el.id === employeeId);

        this.service.employees.splice(employeeIndex, 1);
        this.dataSource.data = this.service.employees;
      });
  }
}
