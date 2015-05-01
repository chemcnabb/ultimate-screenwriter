'use strict';

//app.module('ultimate.content', ['ngRoute'])



    app.controller('ContentCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };
        $scope.content = {
            page : "Content"


        };
    }]);