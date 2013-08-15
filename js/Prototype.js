var myApp = angular.module('myApp', [])
    .controller('dashboard', function ($scope, $http) {
        $scope.widgets = $http.get('/status/anything').then(function (res) {
            return res.data;
        });
    })
    .directive('ngWidget', function () {
        return {
                    restrict: 'EACM',
                    templateUrl: 'widget.html'
                }
    });


