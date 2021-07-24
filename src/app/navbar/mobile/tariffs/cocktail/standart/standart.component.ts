import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/cocktail.service';
import { Cocktail } from 'src/models/cocktail.model';


@Component({
  selector: 'app-standart',
  templateUrl: './standart.component.html',
  styleUrls: ['./standart.component.css']
})
export class StandartComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  cocktailArray: Cocktail[] = [];
  

  ngOnInit(): void {
    this.cocktailArray = this.cocktailService.getCocktails();
  }

}
