'use strict';

travelDestinationGuideApp.factory('destinationData', function ($resource) {

    var resource = $resource('http://localhost:3000/destination-details/:id', { id: '@id' },
        {
            'get':    {method:'GET'},
            'save':   {method:'POST'},
            'query':  {method:'GET', isArray:true}
        });
//    var allDestinations = $resource('http://localhost:3000/all-destinations');



    return{
        getDestination: function(id) {
            console.log('getDestination');
            return resource.get({id: id});
        },
        getAllDestinations: function(id) {
            console.log('getALLDestinations');
            return resource.query({id: id});
        }

        /*,
        getAllDestinations: function() {
            console.log('getAllDestinations');
            return allDestinations.get();
        }*/

        /*getDestination: function(id, succescb){
            $http({method: 'GET', url:'/data/destination/' + id})
                .success(function(data, status, header, config){
                    succescb(data);
                })
                .error(function(data, status, header, config){

                });
        }*/

        /*getDestination: {
            id: 1,
            name: "Old Town",
            city: "Plovdiv",
            country: "Bulgaria",
            continent: "Europe",
            coordinates: "",
            imageCover: {
                "url": "img/old-town/1.jpg",
                "additionalInformation": "A preserved medieval street in the Old town."
            },
            additionalInformation: "The Old Town of Plovdiv is a historic preservation site known for its Bulgarian Renaissance architectural style." +
                " The Old Town covers the area of the three central hills : Nebet Tepe, Dzhambaz Tepe and Taksim Tepe. Almost every house in the Old " +
                "Town has its characteristic exterior and interior decoration.",
            images: [
                {
                    "url": "img/old-town/2.jpg",
                    "additionalInformation": ""
                },
                {
                    "url": "img/old-town/3.jpg",
                    "additionalInformation": "Plovdiv Sports Complex in autumn."
                },
                {
                    "url": "img/old-town/4.jpg",
                    "additionalInformation": "The Plovdiv Ancient theatre."
                },
                {
                    "url": "img/old-town/5.jpg",
                    "additionalInformation": "A performance in the Roman Odeon."
                }
            ]
        },

        getAllDestinations: [
            {
                id: 1,
                name: "Old Town",
                city: "Plovdiv",
                country: "Bulgaria",
                continent: "Europe",
                coordinates: "",
                imageCover: {
                    "url": "img/old-town/1.jpg",
                    "additionalInformation": "A preserved medieval street in the Old town."
                },
                additionalInformation: "The Old Town of Plovdiv is a historic preservation site known for its Bulgarian Renaissance architectural style." +
                    " The Old Town covers the area of the three central hills : Nebet Tepe, Dzhambaz Tepe and Taksim Tepe. Almost every house in the Old " +
                    "Town has its characteristic exterior and interior decoration.",
                images: [
                    {
                        "url": "img/old-town/2.jpg",
                        "additionalInformation": ""
                    },
                    {
                        "url": "img/old-town/3.jpg",
                        "additionalInformation": "Plovdiv Sports Complex in autumn."
                    },
                    {
                        "url": "img/old-town/4.jpg",
                        "additionalInformation": "The Plovdiv Ancient theatre."
                    },
                    {
                        "url": "img/old-town/5.jpg",
                        "additionalInformation": "A performance in the Roman Odeon."
                    }
                ]
            },
            {
                id: 2,
                name: "Wurstelprater",
                city: "Vienna",
                country: "Austria",
                continent: "Europe",
                coordinates: "",
                imageCover: {
                    "url": "img/wurstelprater/1.jpg",
                    "additionalInformation": "The Wurstelprater pictured from Wiener Riesenrad (Ferris Wheel)."
                },
                additionalInformation: "The Wurstelprater is an amusement park and section of the Wiener Prater (a park) in the second district of Vienna, Leopoldstadt.This institution dates back to the time of the Austrian Empire, when Emperor Josef II. made the Prater (which has been serving as Imperial hunting ground until then) open to public in 1766 and it's the oldest amusement park in the world. Soon the first snack bars, stalls and bowling alleys opened up on the grounds and the Wurstelprater was born.",
                images: [
                    {
                        "url": "img/wurstelprater/2.jpg",
                        "additionalInformation": "The Riesenrad, seen from the outside of the Prater."
                    },
                    {
                        "url": "img/wurstelprater/3.jpg",
                        "additionalInformation": "Boomerang attraction."
                    },
                    {
                        "url": "img/wurstelprater/4.jpg",
                        "additionalInformation": "Space shot attraction."
                    }
                ]
            },
            {
                id: 3,
                name: "Wurstelprater",
                city: "Vienna",
                country: "Austria",
                continent: "Europe",
                coordinates: "",
                imageCover: {
                    "url": "img/wurstelprater/1.jpg",
                    "additionalInformation": "The Wurstelprater pictured from Wiener Riesenrad (Ferris Wheel)."
                },
                additionalInformation: "The Wurstelprater is an amusement park and section of the Wiener Prater (a park) in the second district of Vienna, Leopoldstadt.This institution dates back to the time of the Austrian Empire, when Emperor Josef II. made the Prater (which has been serving as Imperial hunting ground until then) open to public in 1766 and it's the oldest amusement park in the world. Soon the first snack bars, stalls and bowling alleys opened up on the grounds and the Wurstelprater was born.",
                images: [
                    {
                        "url": "img/wurstelprater/2.jpg",
                        "additionalInformation": "The Riesenrad, seen from the outside of the Prater."
                    },
                    {
                        "url": "img/wurstelprater/3.jpg",
                        "additionalInformation": "Boomerang attraction."
                    },
                    {
                        "url": "img/wurstelprater/4.jpg",
                        "additionalInformation": "Space shot attraction."
                    }
                ]
            }
        ]*/
    }
});