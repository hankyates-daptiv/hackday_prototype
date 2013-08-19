
var masonry,
    footbed,
    myApp = angular.module('myApp', ['ngAnimate'])
        .controller('dashboard', function ($scope, $http, $location) {
            $scope.doData = function(event) {
                var btn = $(event.currentTarget);
                if(btn.val() == 'derp'){
                    btn.val('ent');
                }
                else {
                    btn.val('derp');
                }
                $scope.widgets = $http.get('/widgets/' + btn.val())
                    .then(function (res) {
                        return res.data;
                    });
            }
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
                        var btn = jQuery('.widget').first().find('button').first();
                        btn.attr('data-intro','Super button of awesome!');
                        btn.attr('data-step', '7');
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
        .animation('.widget-animation', function(){
            var layout = function(){masonry.layout();};
            return {
                addClass: function(element,className,done) {
                    if(className == 'hidebody') {
                        jQuery(element).hide(500,
                            function(){
                                layout();
                                done();
                            });
                    }
                    else {
                        done();
                    }
                },
                removeClass: function(element,className,done) {
                    if(className=='hidebody'){
                        var wb = jQuery(element).parent().parent();
                        wb.addClass('animating');
                        
                        jQuery(element).show(500,
                            function(){
                                setTimeout(function(){wb.removeClass('animating');},400);
                                layout();
                                done();
                            });
                    }
                    else {
                        done();
                    }
                }
            };
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
                    element.draggable({revert: true});
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
                        dragged.draggable({revert: false})
                        masonry.reloadItems();
                        masonry.layout();
                },
                hoverClass: 'over'
              });
            }
          };
        });
