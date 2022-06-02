import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeFormModalComponent } from './components/employee-form-modal/employee-form-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AppRoutesModule } from './app.routes';
import { EmployeeDeleteModalComponent } from './components/employee-delete-modal/employee-delete-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

const ANGULAR_MATERIAL_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
];

const COMMON_MODULES = [
  AppRoutesModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
];

const COMPONENTS = [];
const MODALS = [EmployeeFormModalComponent];

const DIRECTIVES = [];
const PIPES = [];
const PROVIDERS = [EmployeeService];

@NgModule({
  declarations: [AppComponent, MODALS, EmployeeListComponent, EmployeeDeleteModalComponent],
  imports: [ANGULAR_MATERIAL_MODULES, COMMON_MODULES],
  entryComponents: [MODALS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
