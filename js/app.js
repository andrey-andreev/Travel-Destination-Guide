'use strict';

var  travelDestinationGuideApp = angular
.module('travelDestinationGuideApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl:'templates/home.html'
            })
            .when('/destination-details/:id', {
                templateUrl: 'templates/destination-details.html'
            })
            .when('/edit-destination/', {
                templateUrl:'templates/edit-destination.html'
            })
            .when('/edit-destination/:id', {
                templateUrl:'templates/edit-destination.html'
            })
            .when('/all-destinations', {
                templateUrl:'templates/all-destinations.html'
            })
            .otherwise({redirectTo:'/home'});
    })
.constant('author', 'Andrey Andreev')
.constant('categories',[
        "Nature",
        "Monumental",
        "53674567",
        "45646",
        "hdfgdtyh",
        "dgjfjg",
        ""
    ]);