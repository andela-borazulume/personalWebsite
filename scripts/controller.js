angular.module('myPortfolio').
controller('portfolioController', ['$scope', 'portfolioFactory', '$mdSidenav',  function($scope, portfolioFactory, $mdSidenav) {
  $scope.isNavOpen = true;

  $scope.toggleSidenav = function() {
  	$mdSidenav('left').toggle();
  };

	$scope.init = function() {
	  portfolioFactory.getResponse(function(data) {
	  	console.log(data.data);
	    $scope.projects = data.data;
	  });
	};

	$scope.init();

}]);

