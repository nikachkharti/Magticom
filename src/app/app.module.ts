import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { StatementComponent } from './statement/statement.component';
import { CarouselService } from './carousel.service';
import { StatementService } from './statement.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StatementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    CarouselService,
    StatementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
