const express = require("express"); // Node js library

const app = express();

const path = require("path");

const port = process.env.PORT || 3001; // Port on which we run locally

var { google } = require("googleapis"); // importing googleapis library

const axios = require("axios"); // Library to send http requests

var bodyParser = require("body-parser"); // To convert incomming data in a user friendly form

const cors = require("cors"); // To solve cros origin problems

// Key to access google api services
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

// Getting Suggestions
// app.post("/suggestion", (req, res) => {
//   youtube.search.list(
//     // To get a list of search result
//     {
//       part: "snippet",
//       q: req.body.word, // word that we want to search comes here
//       maxResults: 10 // maximun number of search result videos
//     },
//     // Call back function when we get the data from the youtube API
//     function(err, data) {
//       if (err) {
//         console.error("Error: " + err);
//       }
//       if (data) {
//         let result = data.data.items.map(videoObj => {
//           return videoObj.snippet.title;
//         });
//         res.json(result);
//       }
//     }
//   );
// });

// Route to send requests to get the videos from the APIs
app.post("/videos", (req, res) => {
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
        console.log("error from dailymotion", error);
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
    .catch(err => res.json(err));
});

// To serve html and css
// app.use(express.static('../public'));
app.use(express.static(path.join(__dirname, "../build")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
//Initializing the server and giving the port where we want to run our server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
