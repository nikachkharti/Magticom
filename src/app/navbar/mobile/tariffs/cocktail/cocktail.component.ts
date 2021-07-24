import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  constructor(
  ) { }

  createComponentIsVisible: boolean = false;
  standartComponentIsVisible: boolean = true;
  
  showCreateComponent()
  {
    this.createComponentIsVisible = true;
    this.standartComponentIsVisible = false;
  }
  showStandatComponent()
  {
    this.createComponentIsVisible = false;
    this.standartComponentIsVisible = true;
  }

  ngOnInit(): void {
  }

}
