import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.scss']
})
export class EmployeeDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public close(remove = false): void {
    this.dialogRef.close(remove);
  }
}
