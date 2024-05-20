import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { AboutComponent } from './home/components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/flipo', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'flipo', component: BannerComponent},
  { path: 'app', component: NavbarComponent, children : [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'about', component: AboutComponent}
    
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
