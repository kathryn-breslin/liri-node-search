# Liri Node Search 

LIRI is a Node-based search application! This app responds to command line arguments and fulfills specific requests to mutiple APIs. 

This application uses a 'switch' statement to control when and how the functions are called. I've broken the application into 4 major functions, one for each of the API calls and one reads and responds to a specific file.

### Technologies
Node.js
Axios
Moment.js
Spotify API (https://developer.spotify.com/documentation/web-api/)
OMDB API (http://www.omdbapi.com/)
Bands In Town API (http://www.artists.bandsintown.com/bandsintown-api)

### Installation
In order to run this application locally, you will need to install the following dependencies: 
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Axios](https://www.npmjs.com/package/axios)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

Starting in your root directory, run `npm install`&mdash; This will install all of the packages I have held in the `package.json` file. 

You will need to create your own `.env` file to hold your own Spotify ID and Spotify Secret. Once you register your application on Spotify API's website, you will be given your own id and secret. 

### Instructions
In order to run this application, you must open the terminal in your root directory. From there, you can simply run these commands: 

- Bands In Town API
    `node liri.js concert-this artist you're interested in seeing`
- Spotify API
    `node liri.js spotify-this-song song you want to search`
- OMDB API
    `node liri.js movie-this movie name you want to search`
- Do What it Says
    `node liri.js do-what-it-says`

You will not need to wrap the artist, song or movie name in quotes. You can simply write your command in-line.
The final command, `do-what-it-says` will read the random.txt file and search the appropriate API.