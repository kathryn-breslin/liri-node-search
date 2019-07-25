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
        spotifyThis(searchValue);
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
        function (response) {
            // console.log(response)

            //Looping through BIT API response
            for (var i = 0; i < response.data.length; i++) {
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

//Calling the Spotify API
function spotifyThis(searchValue) {
    spotify.search({
        type: 'track',
        query: searchValue
    }).then(function (response) {
        // console.log(response.tracks.items);
        var data = response.tracks.items;

        //Looping through the response data
        //console.logging to the terminal
        for (var i = 0; i < data.length; i++) {
            console.log("------------------------------------")
            console.log("Artist: " + data[i].artists);
            console.log("Song name: " + data[i].name);
            console.log("Preview Song: " + data[i].preview_url);
            console.log("Album: " + data[i].album.name);
            console.log("------------------------------------")

        }
    })
}

//function to call OMDB api
function movieThis() {
        
    var queryUrl = "http://www.omdbapi.com/?t=" + searchValue + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        axios.get(queryUrl).then(
            function (response) {
                // console.log(response);
                console.log("");
                console.log("---------------------------------------")
                console.log("Title: " + response.data.Title);
                console.log("Year " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("---------------------------------------")
                console.log("");
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
}

//reading the random.txt file, calling the spotify API
function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }
        // console.log(data);

        //splitting the data into an array
        var dataArr = data.split(',');
        console.log(dataArr)

        //swtch statment to carry out the functions
        switch (dataArr[0]) {
            case "concert-this":
                concertThis(dataArr[1]);
                break;

            case "spotify-this-song":
                spotifyThis(dataArr[1]);
                break;

            case "movie-this":
                movieThis(dataArr[1]);
                break;
        }

    })
}