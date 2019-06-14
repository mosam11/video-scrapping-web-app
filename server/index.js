const express = require("express"); // Node js library

let Vimeo = require("vimeo").Vimeo;

let vimeoClient = new Vimeo(
  "{client_id:f500201b2460c07e1ef0caf2f661c9461ccc90fa}",
  "{client_secret:uj3tZNIzRRjzfI3xB8uZTSeHyHB0vQmY7RcMGUnxo/Z3uJhjauXkhWKXOuzmgSuPakKnV7mchBzwF+2f5gWEHeRMZg8iH2U2pxMbQbJQrDjHWWgQu9y7Lgg0ihg/Svrs}",
  "{access_token:XXXXXXXXXX574e}"
);

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
  vimeoClient.request(
    /*options*/ {
      // This is the path for the videos contained within the staff picks
      // channels
      path: "/videos",
      // This adds the parameters to request page two, and 10 items per
      // page
      query: {
        page: 2,
        per_page: 10,
        fields: "uri,name,description,duration,created_time"
      }
    },
    /*callback*/ function(error, body, status_code, headers) {
      if (error) {
        console.log("error");
        console.log(error);
      } else {
        console.log("body");
        console.log(body);
      }

      // console.log("status code");
      // console.log(status_code);
      // console.log("headers");
      // console.log(headers);
    }
  );
  let youtubePromise = new Promise((resolve, reject) => {
    //Get videos from youtube
    youtube.search.list(
      // To get a list of search result
      {
        part: "snippet",
        q: req.body.keyword, // word that we want to search comes here
        maxResults: 10 // maximun number of search result videos
      },
      // Call back function when we get the data from the youtube API
      function(err, data) {
        if (err) {
          console.error("Error: " + err);
          reject(err);
        }
        if (data) {
          resolve(data);
        }
      }
    );
  });

  let dailyMotionPromise = new Promise((resolve, reject) => {
    // Add search from daily motion

    // Make a request for a video from dailymotion with a search string
    axios
      .get(
        `https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle&country=pk&search=${
          req.body.keyword
        }&limit=10`
      )
      .then(function(response) {
        // handle success
        resolve(response);
      })
      .catch(function(error) {
        // handle error
        console.log("error ", error);
        reject(error);
      });
  });
  Promise.all([youtubePromise, dailyMotionPromise])
    .then(data => {
      res.json({
        youTube: data[0].data.items,
        dailyMotion: data[1].data.list
      });
    })
    .catch(err => response.json(err));
});

//Initializing the server and giving the port where we want to run our server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
