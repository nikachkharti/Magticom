import { Injectable } from '@angular/core';
import { Cocktail } from 'src/models/cocktail.model';
@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor() { }

  getCocktails(): Cocktail[]
  {
    return [
      new Cocktail(1, 'კოქტეილი 60', 'ულიმიტო', 'ულიმიტო', 'ულიმიტო', 60, 30, '6060'),
      new Cocktail(2, 'კოქტეილი 30', '3000 MB', 'ულიმიტო', 'ულიმიტო', 30, 30, '3003'),
      new Cocktail(3, 'კოქტეილი 25', '1000 MB', 'ულიმიტო', 'ულიმიტო', 25, 30, '2525'),
      new Cocktail(4, 'კოქტეილი 10', '1000 MB', 'ულიმიტო-შიდა ქსელზე', 'ულიმიტო', 10, 30, ''),
      new Cocktail(5, 'კოქტეილი 5', '1000 MB', 'ულიმიტო-შიდა ქსელზე', 'ულიმიტო', 5, 7, ''),
    ]
  }


}
