'use strict';

angular.module('ultimate.content', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/content', {
            templateUrl: 'content/content.html',
            controller: 'ContentCtrl'
        });
    }])

    .controller('ContentCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        }
    }]);