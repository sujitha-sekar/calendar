import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
