'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ultimate', [
    'ui.bootstrap',
    'ngRoute'


]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'content/landing.html',
            controller: 'LandingCtrl'
        });
        $routeProvider.when('/import-screenplay', {
            templateUrl: 'content/import.html',
            controller: 'ImportCtrl'
        });
        $routeProvider.when('/content', {
            templateUrl: 'content/content.html',
            controller: 'ContentCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/content'});

    }]);



//var gui = require('nw.gui');
//var new_win = gui.Window.open('http://flatstage.johnst.net/tangerine/q2/index.html', {
//    position: 'center',
//
//    show: false,
//    toolbar: false,
//    frame: false
//});
//new_win.show();



require("nw.gui").Window.get().show();