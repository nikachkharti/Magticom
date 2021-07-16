import { Component, OnInit } from '@angular/core';
import { News } from 'src/models/news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private newsService:NewsService) { }

  newsArray: News[] = [];

  ngOnInit(): void {
    this.newsArray = this.newsService.getNews();
  }

}
