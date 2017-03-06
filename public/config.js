var app = angular.module('theMod');

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/gdterms', {
  controller:'theController',
  templateUrl: 'gdterms.html'
  });

  $locationProvider.hashPrefix('');
});
