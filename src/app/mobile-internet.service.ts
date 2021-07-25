import { Injectable } from '@angular/core';
import { MobileInternet } from 'src/models/mobile-internet.model';

@Injectable({
  providedIn: 'root'
})
export class MobileInternetService {
  constructor() { }

  getMobileInternets(): MobileInternet[]
  {
    return [
      new MobileInternet(1, '1000 MB', 5, 30, '*111#'),
      new MobileInternet(2, '3000 MB', 9, 30, '*111#'),
      new MobileInternet(3, '5000 MB', 12, 30, '*111#'),
      new MobileInternet(4, '20000 MB', 30, 30, '*111#'),
      new MobileInternet(5, 'ულიმიტო MB', 150, 30, '*111#'),
      new MobileInternet(6, 'ულიმიტო ინტერნეტი დღე-ღამე', 1, 1, '*243#'),
      new MobileInternet(7, 'ულიმიტო ინტერნეტ-კვირა', 5, 7, '*157#')
    ]
  }
}
