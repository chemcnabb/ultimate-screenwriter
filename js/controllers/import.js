/**
 * Created by che.mcnabb on 15-05-01.
 */
var nodeUtil = require("util"),
    fs = require('fs'),
    _ = require('underscore'),
    PDFParser = require("pdf2json/pdfparser");

app.controller('ImportCtrl', ['$scope', function($scope){
    $scope.content = {

        page:"Import"
    }
}]);