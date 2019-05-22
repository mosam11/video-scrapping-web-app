const express = require("express"); // Node js library

const app = express(); // Initializing

const port = 3001; // Port on which we run locally

var { google } = require("googleapis"); // importing googleapis library

const axios = require("axios"); // To send http requests

var bodyParser = require("body-parser"); // For parsing incomming data ina good form

const cors = require("cors"); // To solve cros origin problems

// Api Generated in the browser from google developer
var YOUTUBE_API_KEY = "AIzaSyBXv3zWJL803UPzgelx1UeCCpu_u5JknM0";

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());
app.use(cors()); // Initialising cors

//Initializing Google Youtube API With The API key
var youtube = google.youtube({
  version: "v3",
  auth: YOUTUBE_API_KEY
});

// Main route
app.get("/", (req, res) => res.send("Hello World!"));

// Route to send requests to get the videos from the APIs
app.post("/videos", (req, res) => {
  //Get videos from youtube
  youtube.search.list(
    // To get a list of search result
    {
      part: "snippet",
      q: req.body.keyword, // word that we want to search comes here
      maxResults: 3 // maximun number of search result videos
    },
    // Call back function when we get the data from the youtube API
    function(err, data) {
      if (err) {
        console.error("Error: " + err);
      }
      if (data) {
        // Add search from daily motion

        // Make a request for a video from dailymotion with a search string
        axios
          .get(
            `https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle&country=pk&search=${
              req.body.keyword
            }&limit=3`
          )
          .then(function(response) {
            // handle success
            console.log(response);
            res.json({
              youTube: data.data.items,
              dailyMotion: response.data.list
            });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      }
    }
  );
});

//Initializing the server and giving the port where we want to run our server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
