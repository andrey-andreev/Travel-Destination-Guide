'use strict';

travelDestinationGuideApp.controller('EditDestinationController',
    function EditDestinationController($scope, $routeParams, destinationData, categories){
        $scope.categories = categories;
});