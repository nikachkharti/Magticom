import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './navbar/mobile/mobile.component';
import { HomeComponent } from './home/home.component';
import { InternetComponent } from './navbar/internet/internet.component';
import { TelevisionComponent } from './navbar/television/television.component';
import { HomePhoneComponent } from './navbar/home-phone/home-phone.component';
import { CocktailComponent } from './navbar/mobile/tariffs/cocktail/cocktail.component';
import { MobileInternetComponent } from './navbar/mobile/tariffs/mobile-internet/mobile-internet.component';
import { InternetRoamingComponent } from './navbar/mobile/tariffs/internet-roaming/internet-roaming.component';
import { MinutesComponent } from './navbar/mobile/tariffs/minutes/minutes.component';
import { SmsMmsComponent } from './navbar/mobile/tariffs/sms-mms/sms-mms.component';
import { OtherTariffsComponent } from './navbar/mobile/tariffs/other-tariffs/other-tariffs.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar/mobile", component: MobileComponent },
  { path: "navbar/internet", component: InternetComponent },
  { path: "navbar/television", component: TelevisionComponent },
  { path: "navbar/home-phone", component: HomePhoneComponent },
  { path: "navbar/mobile/tariffs/cocktail", component: CocktailComponent },
  { path: "navbar/mobile/tariffs/MobileInternetComponent", component: MobileInternetComponent },
  { path: "navbar/mobile/tariffs/InternetRoamingComponent", component: InternetRoamingComponent },
  { path: "navbar/mobile/tariffs/MinutesComponent", component: MinutesComponent },
  { path: "navbar/mobile/tariffs/SmsMmsComponent", component: SmsMmsComponent },
  { path: "navbar/mobile/tariffs/OtherTariffsComponent", component: OtherTariffsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
