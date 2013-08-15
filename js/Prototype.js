var myApp = angular.module('myApp', [])
    .controller('dashboard', function ($scope, $http) {
        $scope.widgets = $http.get('/widgets/dierp').then(function (res) {
            return res.data;
        });
    })
    .directive('ngWidget', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'widget.html'
        }
    })
    .directive('ngTablewidget', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'table-widget.html'
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
    .directive('ngDatefield', function () {
        return {
            controller: function ($scope) {
                $scope.field.date = new Date($scope.field.value).toString();
            },
            restrict: 'EACM',
            templateUrl: 'date.html'
        }
    });
