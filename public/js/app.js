
  'use strict';
  var app = angular.module('DodgersApp', ['ngRoute', 'ngAnimate']);

  // Routes
  app.config(function ($routeProvider) {
      $routeProvider

          .when('/', {
              templateUrl: 'views/home.html',
              controller: 'HomeController'
          })


          .otherwise({ redirectTo: '/' });
  });
