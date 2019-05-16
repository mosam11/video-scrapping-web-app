import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux

class SearchResult extends Component {
  render() {
    return (
      <div id="searchMain">
        <h1 className="whiteTxt">Search Results</h1>
        <div className="centerBlockItems">
          {/* Checking if there is any video relating the search from store */}
          {this.props.videos.length === 0 ? (
            <h2 className="whiteTxt">Sorry No Video</h2>
          ) : (
            this.props.videos.map((video, index) => (
              <div key={index} className="searchResultDiv__item">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt="video thumbnail image"
                  className="searchResultDiv__item__img"
                />
                <h3 className="whiteTxt">{video.snippet.title}</h3>
                <p className="whiteTxt">{video.snippet.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

//Object tomap state of redux to the props of the component

const mapStateToProps = state => {
  return {
    videos: state.searchReducer.videos
  };
};

export default connect(mapStateToProps)(SearchResult); // Export the component
