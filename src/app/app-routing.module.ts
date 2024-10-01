import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AddProjectComponent } from './core/components/add-project/add-project.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path : 'app', component: NavbarComponent, children : [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'addProject', component: AddProjectComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
