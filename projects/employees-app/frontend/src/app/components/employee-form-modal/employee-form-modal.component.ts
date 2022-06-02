import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/types/employee.interface';

interface ModalData {
  onEditMode: boolean;
  employee: Employee;
}

@Component({
  selector: 'app-employee-form-modal',
  templateUrl: './employee-form-modal.component.html',
  styleUrls: ['./employee-form-modal.component.scss']
})
export class EmployeeFormModalComponent {
  public employeeFormGroup: FormGroup;
  public roles: string[] = ['User', 'Admin'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {
    this.employeeFormGroup = this.buildEmployeeFormGroup(fb);

    if (data.onEditMode) {
      this.patchEmployeeFormGroup(data.employee);
    }
  }

  save(): void {
    this.dialogRef.close(this.employeeFormGroup.value);
  }

  close(): void {
    this.dialogRef.close();
  }

  private patchEmployeeFormGroup(employee: Employee) {
    this.employeeFormGroup.patchValue(employee);
  }

  private buildEmployeeFormGroup(fb: FormBuilder) {
    return fb.group({
      id: fb.control(''),
      fullName: fb.control('', Validators.required),
      isActive: fb.control(true),
      role: fb.control('User'),
      age: fb.control(null),
      hiredOn: fb.control(null),
      address: fb.control(''),
      gender: fb.control('male')
    });
  }
}
