var command = "";

for (var i = 2; i < process.argv.length; i++) {
    // console.log(process.argv[i]);
    command += process.argv[i] + " "
}


switch (command) {
    case "concert-this":
        concertThis();
        breakl

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

function concertThis() {

}

function spotifyThis() {

}

function movieThis() {

}

function doWhatItSays() {
    
}