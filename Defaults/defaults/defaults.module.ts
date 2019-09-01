import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { DefaultsComponent } from 'src/app/Defaults/defaults/defaults.component';
import { HomeComponent } from 'src/app/home/home.component';


@NgModule({
  declarations: [DefaultsComponent,HomeComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class DefaultsModule { }
