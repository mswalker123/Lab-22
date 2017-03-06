var app = angular.module('theMod');

app.controller('theController', function($scope, $http){

  $http ({
    method: 'GET',
    url: '/gdterms'
  }).then(function successCallback(response){
    $scope.mygdterms = response.data;
  });

});
