angular.module('myPortfolio').
factory('portfolioFactory', ['$http', function($http) {
  return {
    getResponse: function(load) {
       $http.get('projects/projects.json').then(function(data) {
        load(data);

      }, function(error) {
        // console.log(error);

      });

    }
  };

}]);
