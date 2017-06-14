
  'use strict';
  app.controller('HomeController',['$scope','$http',function($scope,$http){
    $http.get('/api/teamData').then(function(response){
      console.log(response.data);
    })
  }]);
