'use strict';

travelDestinationGuideApp.controller('HomeController',
    function HomeController($scope, destinationData){

        $scope.destinations = destinationData.getAllDestinations;
        $scope.quantity = 3;
    }
);