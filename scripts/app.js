var app = angular.module('myPortfolio', ['ngRoute', 'ngMaterial']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
    }).
  when('/about', {
      templateUrl: 'partials/about.html',
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);
