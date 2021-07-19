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

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StatementComponent,
    NewsComponent,
    PopularComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    CarouselService,
    StatementService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
