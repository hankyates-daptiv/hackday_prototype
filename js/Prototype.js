var myApp = angular.module('myApp', [])
    .controller('dashboard', function ($scope, $http, $location) {
        var search = $location.search();
        $scope.widgets = $http.get('/widgets/' + search.entid).then(function (res) {
            return res.data;
        });
    })
    .directive('ngWidget', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/widget.html'
        }
    })
    .directive('ngTablewidget', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/table-widget.html'
        }
    })
    .directive('ngTextfield', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/text.html'
        }
    })
    .directive('ngLongtextfield', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/longtext.html'
        }
    })
    .directive('ngDatefield', function () {
        return {
            controller: function ($scope) {
                $scope.field.date = new Date($scope.field.value).toString();
            },
            restrict: 'EACM',
            templateUrl: 'templates/date.html'
        }
    });
