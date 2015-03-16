var app = angular.module('myPortfolio', ['ngRoute', 'ngMaterial']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
    }).
  when('/about', {
      templateUrl: 'about.html',
    })
    .when('/portfolio', {
      templateUrl: 'portfolio.html',
    })
    .when('/contact', {
      templateUrl: 'contact.html',
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);
