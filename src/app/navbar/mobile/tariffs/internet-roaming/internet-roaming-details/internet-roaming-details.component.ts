import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternetRoamingService } from 'src/app/internet-roaming.service';


@Component({
  selector: 'app-internet-roaming-details',
  templateUrl: './internet-roaming-details.component.html',
  styleUrls: ['./internet-roaming-details.component.css']
})
export class InternetRoamingDetailsComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private internetRoamingService:InternetRoamingService
  ) { }
  
  roamingArray: any = [];


  ngOnInit(): void {
    this.roamingArray = this.internetRoamingService.getRoamings();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.roamingArray = this.roamingArray.find((roaming: any) => {
      return roaming.id === id;
    })
  }

}
