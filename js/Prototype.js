var myApp = angular.module('myApp', [])
    .controller('dashboard', function ($scope, $http) {
        $scope.widgets = $http.get('/status/11111111-1111-1111-1111-111111111111').then(function (res) {
            return res.data;
        });
    })
    .directive('ngWidget', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'widget.html'
                }
    })
    .directive('ngTableWidget', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'widget.html'
                }
    })
    .directive('ngTextfield', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'text.html'
                }
    })
    .directive('ngLongtextfield', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'longtext.html'
                }
    })
    .directive('ngdatefield', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'date.html'
                }
    });
