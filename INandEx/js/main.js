var inExApp = angular.module('inExApp', ['ngRoute', 'ngCookies']);

inExApp.config(['$routeProvider', function ($routeProvider) {
		 $routeProvider
        .when('/', {
            controller: 'landingController',
            templateUrl: 'components/landing.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: 'components/landing.html' });	
	}])