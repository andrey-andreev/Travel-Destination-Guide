var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// allow server to be called from different domain
var allowCrossDomain = function (req, res, next) {
    if (req.method.toUpperCase() === "OPTIONS") {
        // Echo back the Origin (calling domain) so that the
        // client is granted access to make subsequent requests
        // to the API.
        res.writeHead(
            "204",
            "No Content",
            {
                "access-control-allow-origin": '*',
                "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
                "access-control-allow-headers": "content-type, accept",
                "access-control-max-age": 10, // Seconds.
                "content-length": 0
            }
        );

        // End the response - we're not sending back any content.
        return( res.end() );

    }
    else {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
    next();
}

app.use(bodyParser());
app.use(allowCrossDomain);

app.get('/', function (req, res) {
    res.send('BAD REQUEST: INVALID URL')
});

app.get('/destination-details/1', function (req, res) {
    return res.send({
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
    });
});

app.get('/destination-details/all', function (req, res) {
    console.log('gggggggggggg');
    return res.send([
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
    ]);
});

app.listen(3000, function () {
});
console.log('Listening...');