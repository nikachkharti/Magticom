import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/cocktail.service';

@Component({
  selector: 'app-standart-details',
  templateUrl: './standart-details.component.html',
  styleUrls: ['./standart-details.component.css']
})
export class StandartDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private cocktailService: CocktailService) { }

  cocktailArray: any = [];
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
    this.cocktailArray = this.cocktailService.getCocktails();
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.cocktailArray = this.cocktailArray.find((cocktail: any) => {
      return cocktail.id === id;
    })
  }

}
