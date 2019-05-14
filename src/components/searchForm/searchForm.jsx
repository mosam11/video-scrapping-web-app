import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Library to send requests to the server

// Creating the search component
class SearchForm extends Component {
  // Function that will run when we press the button to search
  onSubmit = e => {
    e.preventDefault(); // To prevent form from reloading the page

    // Getting value of the search input
    let keyword = document.getElementById("searchField").value;

    // Sending request to the server
    axios
      .post(
        // Configuring the route on which we want to send request
        "http://localhost:3001/videos",

        // Sending keyword that we want to search
        {
          keyword
        }
      )
      // Call back function to run when server give response to a request
      .then(
        // Data that the server responded with
        response
         => {
        console.log(response);
      })
      .catch(
        // Error if that occured
        err
         => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
      {/* Heading of search bar */}
        <h1 className="whiteTxt">Video Seeker</h1>
        <div className="container__item">
        {/* Search form that we will submit to search something */}
          <form className="form" onSubmit={this.onSubmit}>
          {/* input field in which user type search query  */}
            <input
              type="text"
              id="searchField"
              className="form__field"
              placeholder="Enter Something To Search"
            />
            {/* Button that will submit the form */}
            <button
              type="submit"
              className="btn btn--primary btn--inside uppercase"
            >
              Search
            </button>
          </form>
        </div>
        <Link
          to="/userForm"
          style={{ marginTop: "20em", position: "absolute" }}
        >
          Login Page
        </Link>
        <br />
        <Link
          to="/userInfo"
          style={{ marginTop: "22em", position: "absolute" }}
        >
          userInfo Page
        </Link>
      </div>
    );
  }
}

export default SearchForm; // Exporting the component from the page
