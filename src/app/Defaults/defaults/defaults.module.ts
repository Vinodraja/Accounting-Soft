import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultsComponent } from './defaults.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SuppliersComponent } from 'src/app/suppliers/suppliers.component';
import { CustomersComponent } from 'src/app/customers/customers.component';



@NgModule({
  declarations: [DefaultsComponent,HomeComponent, CustomersComponent, SuppliersComponent],
  imports: [
    CommonModule,RouterModule,BrowserModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,  MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,BrowserAnimationsModule
  ],exports: [
    CommonModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatIconModule,
     MatProgressSpinnerModule
     ],
})
export class DefaultsModule { }
