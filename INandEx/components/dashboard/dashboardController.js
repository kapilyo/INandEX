inExApp.controller('dashboardController', function dashboardController($scope, $location, $timeout) {
    $scope.locationNow = 'Dashboard'

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
                    date: '10/01/2018',
                    category: 'hydrozed',
                    minusExp: 50
                }]
            },
            {
                month: 'October',
                inn: 55000,
                exp: 25000,
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


    $scope.monthSrc = {};
    if ($scope.inEx && $scope.inEx.years.length) {

        var dateNow = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        for (var i = 0; i < $scope.inEx.years.length; i++) {
            if ($scope.inEx.years[i].year == dateNow.getFullYear()) {
                for (var j = 0; j < $scope.inEx.years[i].months.length; j++) {
                    if ($scope.inEx.years[i].months[j].month == monthNames[dateNow.getMonth()]) {
                        $scope.monthSrc = $scope.inEx.years[i].months[j];
                    }
                }
            }
        }
    }

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];

    if ($scope.monthSrc) {
        $timeout(function () {
            $scope.expPercent = ($scope.monthSrc.exp / $scope.monthSrc.inn * 100).toFixed(2) + '%';
        }, 200);
    }

});