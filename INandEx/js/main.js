var inExApp = angular.module('inExApp', ['ngRoute', 'ngCookies']);

inExApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/login/login.html',
            controller: 'loginController'
        })
        .when('/dashboard', {
            templateUrl: 'components/dashboard/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/addExpense', {
            templateUrl: 'components/addExpense/addExpense.html',
            controller: 'addExpenseController'
        })
        .otherwise({ redirectTo: 'components/login/login.html' });
}])