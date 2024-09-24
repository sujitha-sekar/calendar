import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'app', component: NavbarComponent, children : [
    { path: 'dashboard', component: DashboardComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
