angular.module('movieApp', [])
  .controller('movieController', function($scope, $http){
     if($scope.movie === undefined){
	$scope.movie="Harry Potter";
	fetchMovie();
    }

    // For changing search on search tab
	 
	 $scope.newSearch = function(){
       setTimeout(fetchMovie, 500);
    };

    // calling api to fetch movie details
	 function fetchMovie(){
      $http.get("http://www.omdbapi.com/?t=" + $scope.movie + "&plot=full")
       .success(function(response){ $scope.MovieDetails = response; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.movie)
       .success(function(response){  $scope.OtherDetails = response; });
    }});