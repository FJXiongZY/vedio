var App = angular.module("App", []);

App.controller("showFilmNavController", ["$scope", "$http", function($scope, $http){
	$http({
		url: './api/getFilmNavData.php',
		method: 'get',
	}).success(function(result){
		$scope.showFilmNav = result["tags"];
	});
}]);

App.controller("showTVNavController", ["$scope", "$http", function($scope, $http){
	$http({
		url: './api/getTVNavData.php',
		method: 'get',
	}).success(function(result){
		$scope.showTVNav = result["tags"];
	});
}]);

App.controller("showHeatMoviesController", ["$scope", "$http", function($scope, $http){
	$http({
		url: './api/getHeatMovies.php',
		method: 'get',
	}).success(function(result){
		$scope.showFirstHeatMovies = result["subjects"][0];
		$scope.showHeatMovies = result["subjects"].slice(1);
	});
}]);

App.controller("showHeatTvController", ["$scope", "$http", function($scope, $http){
	$http({
		url: './api/getHeatTv.php',
		method: 'get',
	}).success(function(result){
		$scope.showFirstHeatTv = result["subjects"][0];
		$scope.showHeatTv = result["subjects"].slice(1);
	});
}]);