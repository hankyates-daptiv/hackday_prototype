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
            templateUrl: 'date.html'
        }
    })
    .directive('ngRisksRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'risks-row.html'
        }
    })
    .directive('ngOpenIssuesRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'open-issues-row.html'
        }
    })
    .directive('ngMilestonesRow', function () {
        return {
            restrict: 'EACM',
            templateUrl: 'milestones-row.html'
        }
    });
