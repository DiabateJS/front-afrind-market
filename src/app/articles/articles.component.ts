import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Result } from '../models/result';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  articles = [];

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((res: Result) => {
      console.log(res);
      
    });
  }

}
