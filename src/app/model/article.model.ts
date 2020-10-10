export class ArticleModel {
  constructor(
    public author: string,
    public title : string,
    public url : string,
    public urlToImage : string,
    public content : string
  ) {
  }
}
