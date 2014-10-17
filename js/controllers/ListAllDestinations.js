'use strict';

travelDestinationGuideApp.controller('ListAllDestinations',function($scope, destinationData){
    var test = destinationData.getAllDestinations('all');
    $scope.destinations = test;
    debugger;
    console.log('array length', test);
    console.log('array length', test.length);
    console.log('array ', test[0].name);
    $scope.destinations.range = function() {
        var range = [];
        for (var i = 0; i < $scope.destinations.length; i = i + 3) {
            range.push(i);
        }
        return range;
    }
});