angular
  .module("hubApp")
  .controller("gifController", function($http, $scope, $state, $stateParams, gifService) {
  $scope.searchFor = 'programming lol';
  $scope.gifs = [];

  $scope.showGif = function() {
    $http.get(`giphyAPiKey=${$scope.searchFor}`).then(function(response) {
      console.log(response);
      $scope.imageUrl = response.data.data.image_original_url;
      $scope.gifs.unshift($scope.imageUrl);
      console.log($scope.gifs);
    }, function(error) {
      console.log(error);
    })
  }

  $scope.removeLast = function() {
    $scope.gifs.shift();
  }


  $scope.showMeTheMemes = function() {
    $state.go("meme")
    console.log("click");
  }
  
  });