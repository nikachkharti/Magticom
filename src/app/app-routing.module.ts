import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './navbar/mobile/mobile.component';
import { HomeComponent } from './home/home.component';
import { InternetComponent } from './navbar/internet/internet.component';
import { TelevisionComponent } from './navbar/television/television.component';
import { HomePhoneComponent } from './navbar/home-phone/home-phone.component';
import { CocktailComponent } from './navbar/mobile/tariffs/cocktail/cocktail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar/mobile", component: MobileComponent },
  { path: "navbar/internet", component: InternetComponent },
  { path: "navbar/television", component: TelevisionComponent },
  { path: "navbar/home-phone", component: HomePhoneComponent },
  { path: "navbar/mobile/tariffs/cocktail", component: CocktailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
