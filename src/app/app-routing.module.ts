import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'app', component: DashboardComponent},
  { path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
