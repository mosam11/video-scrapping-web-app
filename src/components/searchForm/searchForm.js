import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchForm extends Component {
  render() {
    return (
      <div className="container">
      
<div class="wrapper">
  <h1>Video Search App</h1>
</div>
        <div className="container__item">
          <form className="form">
            <input
              type="email"
              className="form__field"
              placeholder="Enter Something To Search"
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
            >
              Search
            </button>
          </form>
        </div>
        <Link to="/" style={{ marginTop: "15vh", position: "absolute" }}>
          Login Page
        </Link>
      </div>
    );
  }
}

export default SearchForm;
