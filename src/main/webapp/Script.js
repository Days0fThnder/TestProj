//<reference path="angular.min.js" />

var myApp = angular
                .module("myModule",[])
                .controller("myController", function ($scope) {
        var galaxy = {
            name: "spiral",
            size: "200 million light years across",
            galPic: "image/galaxy.jpg"
        };
    
     $scope.galaxy = galaxy;
});
