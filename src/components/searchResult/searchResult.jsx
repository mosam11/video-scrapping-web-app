import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux

class SearchResult extends Component {
  renderResult = (heading, videos) => {
    return (
      <div className="renderResultDiv">
        <h2 className={heading === "YouTube" ? "whiteTxt" : ""}>{heading}</h2>
        <div className="centerBlockItems">
          {/* Checking if there is any video relating the search from store */}
          {videos.length === 0 ? (
            <h2 className="whiteTxt">Sorry No Video</h2>
          ) : (
            videos.map((video, index) => (
              <div key={index} className="searchResultDiv__item">
                <img
                  src={
                    video.snippet
                      ? video.snippet.thumbnails.medium.url
                      : video.thumbnail_url
                  }
                  alt="video thumbnail image"
                  className="searchResultDiv__item__img"
                />
                <h3 className="whiteTxt">
                  {video.snippet ? video.snippet.title : video.title}
                </h3>
                <p className="whiteTxt">
                  {video.snippet ? video.snippet.description : "No Description"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div id="searchMain">
        <h1 className="whiteTxt">Search Results</h1>
        {this.renderResult("YouTube", this.props.videos.youTube)}
        {this.renderResult("DailyMotion", this.props.videos.dailyMotion)}
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
