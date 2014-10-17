'use strict';

travelDestinationGuideApp.controller('DestinationDetailsController',
    function DestinationDetailsController($scope, $routeParams, destinationData) {

        $scope.destination = destinationData.getDestination($routeParams.id);

        /*$scope.destination = destinationData.getDestination;*/

        /*destinationData.getDestination(1, function(data){
            $scope.destination = data;
        });*/
    });