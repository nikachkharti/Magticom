import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/models/carousel.model';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import { CarouselService } from '../carousel.service';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor(private carouselService: CarouselService){}

  carouselContentArray: Carousel[] = [];


  onSwiper(swiper:any) {}
  onSlideChange() {}


  ngOnInit(): void {
    this.carouselContentArray = this.carouselService.getCarouselContent();
  }

}
