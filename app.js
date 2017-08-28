var app = angular.module("hubApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("gif", {
      url: "/gif",
      templateUrl: "./views/gif.html",
      controller: "gifController"
    })
      .state("meme", {
        url: "/meme",
        templateUrl: "./views/gif_meme.html",
        controller: "memeController"
      })

    .state("tech", {
      url: "/tech",
      templateUrl: "./views/tech.html",
      controller: "techController"
    })
    .state("forum", {
      url: "/forum",
      templateUrl: "./views/forum.html",
      controller: "forumController"
    })
      .state("forumTopic", {
        url: "/forum/topic/:id",
        templateUrl: "./views/forum-topic.html",
        controller: "forumController"
      })

})