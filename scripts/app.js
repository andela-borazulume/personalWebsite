var app = angular.module('myPortfolio', ['ngRoute', 'ngMaterial']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      // controller: 'homeController'
    }).
  when('/about', {
      templateUrl: 'partials/about.html',
      // controller: 'aboutController'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'portfolioController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      // controller: 'contactController'
    })
    .otherwise({
      redirectTo: '/home.html'
    });

}]);
