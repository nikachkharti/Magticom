import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './navbar/mobile/mobile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar/mobile", component: MobileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
