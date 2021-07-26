import { Component, OnInit } from '@angular/core';
import { InternetRoamingService } from 'src/app/internet-roaming.service';
import { InternetRoaming } from 'src/models/internet-roaming.model';
import { Operator } from 'src/models/operators.model';

@Component({
  selector: 'app-internet-roaming',
  templateUrl: './internet-roaming.component.html',
  styleUrls: ['./internet-roaming.component.css']
})
export class InternetRoamingComponent implements OnInit {
  constructor(private intRoamingService:InternetRoamingService) { }

  roamingArray: InternetRoaming[] = [];
  additionalRowVisible: boolean = true;

  operators: Operator[] = [];




  showAdditionalInfo()
  {
    this.additionalRowVisible = !this.additionalRowVisible;
  }

  ngOnInit(): void {
    this.roamingArray = this.intRoamingService.getRoamings();
    this.operators = this.intRoamingService.getOperators();
  }

}
