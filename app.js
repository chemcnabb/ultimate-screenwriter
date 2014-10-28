'use strict';

// Declare app level module which depends on views, and components
angular.module('ultimate', [
    'ui.bootstrap',
    'ngRoute',
    'ultimate.content'

]).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({redirectTo: '/content'});

    }]);


