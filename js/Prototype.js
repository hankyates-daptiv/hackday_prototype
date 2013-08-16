var masonry,
    myApp = angular.module('myApp', [])
        .controller('dashboard', function ($scope, $http, $location) {
            var search = $location.search();
            $scope.widgets = $http.get('/widgets/' + search.entid).then(function (res) {
                return res.data;
            });
        })
        .directive('ngWidget', function () {
            return {
                link: {
                    post: function () {
                        masonry = new Masonry(document.getElementById('dashboard'), {
                            columnWidth: 460,
                            itemSelector: '.widget'
                        });
                    }
                },
                restrict: 'EACM',
                templateUrl: 'templates/widget.html'
            }
        })
        .directive('ngTablewidget', function () {
            return {
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/table-widget.html'
            }
        })
        .directive('ngTextfield', function () {
            return {
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/text.html'
            }
        })
        .directive('ngLongtextfield', function () {
            return {
                link: function () {
                    masonry.layout();
                },
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
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/date.html'
            }
        })
        .directive('ngRisksRow', function () {
            return {
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/risks-row.html'
            }
        })
        .directive('ngOpenIssuesRow', function () {
            return {
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/open-issues-row.html'
            }
        })
        .directive('ngMilestonesRow', function () {
            return {
                link: function () {
                    masonry.layout();
                },
                restrict: 'EACM',
                templateUrl: 'templates/milestones-row.html'
            }
        })
        .directive('draggable', function() {
          return {
            restrict:'A',
            link: function(scope, element, attrs) {
              element.draggable({
                revert:true
              });
            }
          };
        });
