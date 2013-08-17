function expanderControllerSetup(scope) {
    scope.hidebody = false;
    scope.toggle = function(event) {
        scope.hidebody = !scope.hidebody;
        setTimeout(function(){
            masonry.layout();
        },0);
    };
}
var masonry,
    footbed,
    myApp = angular.module('myApp', [])
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
                link: {
                    post: function () {
                        masonry = new Masonry(document.getElementById('dashboard'), {
                            columnWidth: 460,
                            itemSelector: '.widget'
                        });
                    }
                },
                controller: function($scope) {
                   expanderControllerSetup($scope); 
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
            controller: function($scope) {
               expanderControllerSetup($scope); 
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
                start: function (event, ui) {
                    element.addClass('dragging');
                },
                stop: function (event, ui) {
                    element.removeClass('dragging');
                }
              });
            }
          };
        })
        .directive('droppable', function($compile) {
          return {
            restrict: 'A',
            link: function(scope, element, attrs){
              element.droppable({
                drop: function(event, ui) {
                    var dragged = ui.draggable,
                        droppedTo = element;

                        droppedTo.before(dragged);
                        masonry.reloadItems();
                        masonry.layout();
                },
                hoverClass: "over"
              });
            }
          };
        });
