'use strict';

var nodeUtil = require("util"),
    fs = require('fs'),
    _ = require('underscore'),
    PDFParser = require("pdf2json/pdfparser");



    app.controller('ImportCtrl', ['$scope', function($scope){
        $scope.content = {

            page:"Import"
        };

        $scope.log = '';

        $scope.$on('flow::filesSubmitted', function (event, $flow, flowFile){
            $scope.processScreenplay(flowFile);
        });

        $scope.processScreenplay = function(script){
            console.log("script:" + script);
        };
    }]);