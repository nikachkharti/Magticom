import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MobileInternetService } from 'src/app/mobile-internet.service';

@Component({
  selector: 'app-mobile-internet-details',
  templateUrl: './mobile-internet-details.component.html',
  styleUrls: ['./mobile-internet-details.component.css']
})
export class MobileInternetDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mobileIntService:MobileInternetService
  ) { }


  mobIntArray:any = [];
  displayPackages: boolean = true;
  displayAdditionalInfo: boolean = false;


  showPackages()
  {
    this.displayAdditionalInfo = false;
    this.displayPackages = true;
  }
  showAdditionalInfo()
  {
    this.displayAdditionalInfo = true;
    this.displayPackages = false;
  }


  ngOnInit(): void {
    this.mobIntArray = this.mobileIntService.getMobileInternets();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.mobIntArray = this.mobIntArray.find((mobileInternet: any) => {
      return mobileInternet.id === id;
    })

  }

}
