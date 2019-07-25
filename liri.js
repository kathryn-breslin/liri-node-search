//Requiring all packages and files
require('dotenv').config();
var axios = require('axios');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

//Breaking down the input values to be able to
//call the command (ex: 'concert-this') and
//process the search value
var command = process.argv[2];
var searchValue = process.argv.slice(3).join(" ")

//Switch case to organize and call functions
switch (command) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

//Bands In Town API
function concertThis() {

    //Calling the Bands In Town API
    var queryURL = "https://rest.bandsintown.com/artists/" + searchValue + "/events?app_id=codingbootcamp";
    // console.log(queryURL);

    axios.get(queryURL).then(
        function(response) {
            // console.log(response)

            //Looping through BIT API response
            for (var i = 0; i < response.data.length; i++){
                console.log("---------------Concerts-----------------")
                console.log("Artist: " + searchValue);
                console.log('');
                console.log("Name of Venue:" + response.data[i].venue.name)
                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
                console.log('');
                console.log("----------------------------------------")
            }
        }
    )
}

function spotifyThis() {

}

function movieThis() {

}

function doWhatItSays() {

}