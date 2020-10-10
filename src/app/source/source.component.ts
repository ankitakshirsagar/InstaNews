import { Component, OnInit } from '@angular/core';
import {GetNewsService} from '../Services/get-news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  sourceOptions: string[] = [];
  selectedSource: string = "Select News Source";
  articlesArray : Array<any>;

  constructor(private getnews : GetNewsService) { }

  ngOnInit() {
    this.getnews.getSources().subscribe((results) => {
      this.sourceOptions = results['sources']
      console.log(this.sourceOptions);  
    }
      );
  }

  selectSource(source: string) {
    this.selectedSource = source;

    this.getnews.getArticles(this.selectedSource).subscribe(data => this.articlesArray = data['articles']);


  }



}
