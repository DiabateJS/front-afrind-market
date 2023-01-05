import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './models/result';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Result>{
    let url = "http://localhost:8888/ws-afrind-market/v1/articles";
    return this.http.get<Result>(url);
  }
}
