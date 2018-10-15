inExApp.controller('loginController', function loginController($scope) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    //https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
    $scope.inEx = {
        years: [{
            year: 2018,
            months: [{
                month: 'january',
                inn: 500,
                exp: 200,
                data: [{
                    id: 1,
                    date: '10/10/2018',
                    category: 'oxygen',
                    minusExp: 100
                },
                {
                    id: 2,
                    date: '10/10/2018',
                    category: 'hydrozed',
                    minusExp: 50
                }]
            }]
        }]
    }


    $scope.dataLoading = false;

    $scope.sigin = function () {
        var homeContainer = document.getElementById('homeContainer');
        homeContainer.classList.toggle("showLogin");
    }
});



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dateNow = new Date();
var yearNow = dateNow.getFullYear();
var monthNow = monthNames[dateNow.getMonth()];



function login() {
    vm.dataLoading = true;
}


