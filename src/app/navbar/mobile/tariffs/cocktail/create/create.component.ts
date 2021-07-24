import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor() { }

  location: string = 'საქართველოში';
  price: string = '12';



  ngOnInit(): void {
  }

}
