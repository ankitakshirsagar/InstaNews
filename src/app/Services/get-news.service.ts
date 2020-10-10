import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { getSupportedCodeFixes } from 'typescript';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  apikey = '5864a2608aed427d8d199665f5fbfc73';
  constructor(private http : HttpClient) { }

  getArticles(source : string){
    //console.log(source);
return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.apikey);
  }

  getSources() {
    
    return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.apikey);
  }

}

