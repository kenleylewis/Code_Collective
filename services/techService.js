angular
  .module("hubApp")
  .service("techService", function($http) {

  var _articles = []
  var _articleId = 0
  
  function article(author, title, description, url, urlToImage, publishedAt) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
  }







    
  })