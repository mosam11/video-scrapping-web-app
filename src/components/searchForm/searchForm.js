import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default SearchForm;
