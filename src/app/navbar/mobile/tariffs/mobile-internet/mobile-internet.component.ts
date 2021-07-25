import { Component, OnInit } from '@angular/core';
import { MobileInternetService } from 'src/app/mobile-internet.service';
import { MobileInternet } from 'src/models/mobile-internet.model';

@Component({
  selector: 'app-mobile-internet',
  templateUrl: './mobile-internet.component.html',
  styleUrls: ['./mobile-internet.component.css']
})
export class MobileInternetComponent implements OnInit {
  constructor(private mobIntService:MobileInternetService) { }
  
  mobileInternetArray: MobileInternet[] = [];

  ngOnInit(): void {
    this.mobileInternetArray = this.mobIntService.getMobileInternets();
  }

}
