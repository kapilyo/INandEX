inExApp.controller('loginController', function loginController($scope, $location) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function (credentials) {
        if (credentials.username == 'kk' & credentials.password == 'kk')
            $location.path('dashboard');
    };

    //https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
    


    $scope.dataLoading = false;

    $scope.sigin = function () {
        var homeContainer = document.getElementById('homeContainer');
        homeContainer.classList.toggle("showLogin");
    }
});







function login() {
    vm.dataLoading = true;
}


