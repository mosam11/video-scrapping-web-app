import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // To connect this component with redux
import { setSearchVideos, setSearchVideosToDefault } from "../../store/action"; //to SetSearchState in redux
import axios from "axios"; // Library to send requests to the server

// Creating the search component
class SearchForm extends Component {
  state = {
    suggestions: []
  };

  // Getting Suggestion from google
  getSuggestions = e => {
    // Sending request to backend for words
    // axios
    //   .post(`/suggestion`, {
    //     word: e.target.value
    //   })
    //   // Call back function to run when server give response to a request
    //   .then(response => {
    //     // Response is the data that the server responded with
    //     this.setState({
    //       suggestions: response.data
    //     });
    //   })
    //   // Error if that occured
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  // Function that will run when we press the button to search
  onSubmit = e => {
    e.preventDefault(); // To prevent form from reloading the page

    //Setting a reference of component
    // This means searchForm component
    let self = this;

    // Getting value of the search input
    let keyword = document.getElementById("searchField").value;

    // Sending request to the server
    axios
      .post(
        // Configuring the route on which we want to send request
        "/videos",

        // Sending keyword that we want to search
        {
          keyword
        }
      )
      // Call back function to run when server give response to a request
      .then(response => {
        // Response is the data that the server responded with
        console.log(response);

        // Seting the videos in the frontend database
        self.props.setSearchVideos(response.data);

        //Changing Route to search result
        self.props.history.push("/results");
      })
      // Error if that occured
      .catch(err => {
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
              list="textSuggest"
              id="searchField"
              className="form__field"
              maxlength={25}
              onChange={this.getSuggestions}
              placeholder="Enter Something To Search"
            />

            <datalist id="textSuggest">
              {this.state.suggestions.length !== 0
                ? this.state.suggestions.map(item => (
                    <option key={item} value={item.split("-")[0]} />
                  ))
                : ""}
            </datalist>
            {/* Button that will submit the form */}
            <button
              type="submit"
              className="btn btn--primary btn--inside uppercase"
              id="myBtn"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// Mapping out userSignIn with the dispatch and adding that in the props of the components
const mapDispatchToProps = dispatch => ({
  setSearchVideos: videos => dispatch(setSearchVideos(videos)), // Mapping actions of redux to props
  setSearchVideosToDefault: _ => dispatch(setSearchVideosToDefault()) // Mapping actions of redux to props
});

// Connecting the component with redux
export default connect(
  null, // Here could be stateToProps if we want to use redux state here
  mapDispatchToProps // Giving out functions that we want to map with the reduce dispatch
)(SearchForm); // Exporting the component from the page
