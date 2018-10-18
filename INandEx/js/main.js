var inExApp = angular.module('inExApp', ['ngRoute', 'ngCookies', 'chart.js']);
//inExApp.constant("baseUrl", "http://localhost:59091/index.html");
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
}]);


