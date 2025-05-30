import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AddProjectComponent } from './components/add-blog/add-project.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    GalleryComponent,
    AddProjectComponent,
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularEditorModule
  ]
})
export class CoreModule { }
