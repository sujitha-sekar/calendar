import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/components/banner/banner.component';
import { AboutComponent } from './home/components/about/about.component';

const routes: Routes = [
  { path: '', component: BannerComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
