angular
  .module("hubApp")
  .service("gifService", function ($http) {

    var currentTestMeme = null;

    this.setCurrentMeme = function(meme) {
      console.log(meme);
      currentTestMeme = meme
      console.log(currentTestMeme)
    }

    this.getCurrentMeme = function() {
      return currentTestMeme;
    }

  });
