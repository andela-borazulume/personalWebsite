angular.module('myPortfolio').
  // myController.controller('homeController', ['$scope', function($scope) {


// }]);


// myController.controller('aboutController', ['$scope', function($scope) {


// }]);

controller('portfolioController', ['$scope', 'portfolioFactory', function($scope, portfolioFactory) {
  portfolioFactory.getResponse(function(data) {
  	console.log(data.data);
    $scope.projects = data.data;
  });




}]);

// myController.controller('contactController', ['$scope', function($scope) {



// }]);
