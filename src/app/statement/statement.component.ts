import { Component, OnInit } from '@angular/core';
import { Statement } from 'src/models/statement.model';
import { StatementService } from '../statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  constructor(private statementService:StatementService) { }

  statements: Statement[] = [];


  ngOnInit(): void {
    this.statements = this.statementService.getStatementContent();
    console.log(this.statements);
    
  }

}
