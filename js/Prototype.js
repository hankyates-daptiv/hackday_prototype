function expanderControllerSetup(scope) {
    console.log('dies has a controlador');
    scope.hidebody = false;
    scope.toggle = function(event) {
        console.log('i as toggled!');
        scope.hidebody = !scope.hidebody;
        setTimeout(function(){
            console.log('domasonry()');
            masonry.layout();
        },50);
    };
}

var myApp = angular.module('myApp', [])
    .controller('dashboard', function ($scope, $http, $location) {
        var search = $location.search();
        $scope.widgets = $http.get('/widgets/' + search.entid).then(function (res) {
            return res.data;
        });
    })
    .filter('plusMinus', function(){
        return function(value) {
            return value ? '+' : '-';
        };
    })
    .directive('ngWidget', function () {
        return {
            controller: function($scope) {
               expanderControllerSetup($scope); 
            },
            restrict: 'EACM',
            templateUrl: 'templates/widget.html'
        }
    })
    .directive('ngTablewidget', function () {
        return {
            controller: function($scope) {
               expanderControllerSetup($scope); 
            },
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
    .filter('ppmLongDate', function($filter) {
        return function (input) {
            return $filter('date')(input, 'medium');
        }
    })
    .filter('ppmShortDate', function($filter) {
        return function (input) {
            return $filter('date')(input, 'MM/dd/yyyy');
        }
    })
    .directive('ngDatefield', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/date.html'
        }
    })
    .directive('ngRisksRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/risks-row.html'
        }
    })
    .directive('ngOpenIssuesRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/open-issues-row.html'
        }
    })
    .directive('ngMilestonesRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'templates/milestones-row.html'
        }
    });
