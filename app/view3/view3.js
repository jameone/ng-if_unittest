'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', ['$templateCache', '$scope', function ($templateCache, $scope) {
        $scope.display = false;
        $scope.buttonClick = function ($event) {
            console.log(" My Click function is called.");
            $scope.display = $event !== true;
        };
    }]);