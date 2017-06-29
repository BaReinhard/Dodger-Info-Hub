(function () {
    'use strict';

    angular.module('DodgersApp', [
        // Angular modules
        'ngRoute'

        // Custom modules

        // 3rd Party Modules

    ]).config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })


            .otherwise({ redirectTo: '/' });
    });
})();
