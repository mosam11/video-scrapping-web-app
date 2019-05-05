const express = require("express");
const app = express();
const port = 3001;

var bodyParser = require("body-parser");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());
app.use(cors());

var { google } = require("googleapis");

var YOUTUBE_API_KEY = "AIzaSyBXv3zWJL803UPzgelx1UeCCpu_u5JknM0";

var youtube = google.youtube({
  version: "v3",
  auth: YOUTUBE_API_KEY
});

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/videos", (req, res) => {
  //Get videos from youtube
  youtube.search.list(
    {
      part: "snippet",
      q: "cats",
      maxResults: 10
    },
    function(err, data) {
      if (err) {
        console.error("Error: " + err);
      }
      if (data) {
        res.json(data.data.items);
      }
    }
  );
  //get videos from
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
