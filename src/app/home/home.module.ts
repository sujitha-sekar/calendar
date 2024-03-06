import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
