import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SearchForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    let keyword = document.getElementById("searchField").value;
    axios
      .post("http://localhost:3001/videos", {
        keyword
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <h1>Video Seeker</h1>
        </div>
        <div className="container__item">
          <form className="form" onSubmit={this.onSubmit}>
            <input
              type="text"
              id="searchField"
              className="form__field"
              placeholder="Enter Something To Search"
            />
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
          style={{ marginTop: "15em", position: "absolute" }}
        >
          Login Page
        </Link>
        <br />
        <Link
          to="/userInfo"
          style={{ marginTop: "20em", position: "absolute" }}
        >
          userInfo Page
        </Link>
      </div>
    );
  }
}

export default SearchForm;
