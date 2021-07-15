import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/models/carousel.model';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  carouselContentArray: Carousel[] = [
    new Carousel(1, 'დისტანციური სწავლების პაკეტი', 'გაინტერესებს რამდენ MB-ს ხარჯავ?', 'გამოიყენე აპლიკაცია MyMagti და დისტანციურად მიიღე საჭირო ინფორმაცია', '../../assets/pictures/statistics.png'),
    

    new Carousel(2, 'ონლაინ შეკვეთა', 'ისარგებლე მაგთის დისტანციური მომსახურებით ონლაინ შეკვეთა და მიიღე სასურველი სერვისი სახლიდან გაუსვლელად.', '', '../../assets/pictures/online-order.png'),
    

    new Carousel(3, 'Setanta-ს არხები მაგთიზე!', 'უყურეთ მაღალრეიტინგულ სპორტულ ტურნირებს მაგთის ტელევიზიით.', '', '../../assets/pictures/setanta.png'),
    

    new Carousel(4, 'დისტანციური სწავლების პაკეტი', '20 გბ – 10₾', 'ყველა საჯარო და კერძო სკოლის მოსწავლეებისა და მასწავლებლებისთვის!', '../../assets/pictures/remote-learning.png'),
    
    new Carousel(5, 'კოქტეილი', 'შეურიე წუთები, MB-ები და SMS-ები, შენი გემოვნებით.', 'გადმოწერე განახლებული აპლიკაცია MyMagti.', '../../assets/pictures/cocktail.png'),
    

    new Carousel(6, 'მაგთის 24 წლიანი ისტორია ახალი ლოგოთი გრძელდება!', '', '', '../../assets/pictures/new-logo.png'),
    

    new Carousel(7, 'ულიმიტო მობილური ინტერნეტი', 'უსწრაფესი, 4.5G ინტერნეტი, მაგთის ხარისხით და საუკეთესო დაფარვით', '', '../../assets/pictures/unlimited.png'),
    

    new Carousel(8, 'ინტერნეტი + ტელევიზია', 'აირჩიე ინტერნეტის და ტელევიზიის შენზე მორგებული საუკეთესო კომბინაცია', '', '../../assets/pictures/internet+tv.png'),
    

    new Carousel(9, 'ინგლისის პრემიერ ლიგა მაგთიზე!', 'Adjarasport1, Adjarasport2', 'გვიყურე!', '../../assets/pictures/adjarasport.png'),
    

    new Carousel(10, 'წუთობრივი პაკეტები', 'გაიაქტიურე სასურველი პაკეტი და აღარ იფიქრო ყოველი წუთის ფასზე', '', '../../assets/pictures/minutes.png'),
    

    new Carousel(11, 'MyMagti', 'მაგთის ოფისი შენს სმარტფონში!', '', '../../assets/pictures/mymagti.png')
  ]


  onSwiper(swiper:any) {}
  onSlideChange() {}


  ngOnInit(): void {
  }

}
