import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzBqxa0XdBtAUh54VYQq3zTFErvv1K--E",
  authDomain: "video-application-304df.firebaseapp.com",
  databaseURL: "https://video-application-304df.firebaseio.com",
  projectId: "video-application-304df",
  storageBucket: "video-application-304df.appspot.com",
  messagingSenderId: "710179737540"
};
firebase.initializeApp(config);

const database = firebase.database(); // Accessing the database
const storage = firebase.storage(); // Accessing the storage

export { firebase, storage, database }; //exporting database
