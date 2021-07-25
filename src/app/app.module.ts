import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { StatementComponent } from './statement/statement.component';
import { CarouselService } from './carousel.service';
import { StatementService } from './statement.service';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { PopularComponent } from './popular/popular.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileComponent } from './navbar/mobile/mobile.component';
import { HomeComponent } from './home/home.component';
import { InternetComponent } from './navbar/internet/internet.component';
import { TelevisionComponent } from './navbar/television/television.component';
import { HomePhoneComponent } from './navbar/home-phone/home-phone.component';
import { CocktailComponent } from './navbar/mobile/tariffs/cocktail/cocktail.component';
import { StandartComponent } from './navbar/mobile/tariffs/cocktail/standart/standart.component';
import { CreateComponent } from './navbar/mobile/tariffs/cocktail/create/create.component';
import { FormsModule } from '@angular/forms';
import { MobileInternetComponent } from './navbar/mobile/tariffs/mobile-internet/mobile-internet.component';
import { InternetRoamingComponent } from './navbar/mobile/tariffs/internet-roaming/internet-roaming.component';
import { MinutesComponent } from './navbar/mobile/tariffs/minutes/minutes.component';
import { SmsMmsComponent } from './navbar/mobile/tariffs/sms-mms/sms-mms.component';
import { OtherTariffsComponent } from './navbar/mobile/tariffs/other-tariffs/other-tariffs.component';
import { StandartDetailsComponent } from './navbar/mobile/tariffs/cocktail/standart/standart-details/standart-details.component';
import { InnerSmallNavComponent } from './inner-small-nav/inner-small-nav.component';
import { MobileInternetDetailsComponent } from './navbar/mobile/tariffs/mobile-internet/mobile-internet-details/mobile-internet-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StatementComponent,
    NewsComponent,
    PopularComponent,
    NavbarComponent,
    FooterComponent,
    MobileComponent,
    HomeComponent,
    InternetComponent,
    TelevisionComponent,
    HomePhoneComponent,
    CocktailComponent,
    StandartComponent,
    CreateComponent,
    MobileInternetComponent,
    InternetRoamingComponent,
    MinutesComponent,
    SmsMmsComponent,
    OtherTariffsComponent,
    StandartDetailsComponent,
    InnerSmallNavComponent,
    MobileInternetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule
  ],
  providers: [
    CarouselService,
    StatementService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
