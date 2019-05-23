import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux
import { message } from "antd";

class VideoPlay extends Component {
  addVideoToFavourite = () => {
    if (!this.props.user) {
      return message.error("Please Login First");
    }
    // addToFavVideo();
  };
  componentDidUpdate(){
    if(!this.props.currentVideo){
      this.props.history.push("/")
    }
  }
  render() {
    return (
      <div id="mainVideoPlayContainer">
        <iframe
          id="videoPlayerFrame"
          src={
            this.props.currentVideo.id.videoId
              ? `https://www.youtube.com/embed/${
                  this.props.currentVideo.id.videoId
                }`
              : `https://www.dailymotion.com/embed/video/${
                  this.props.currentVideo.id
                }`
          }
        />
        <button
          className="btn btn--primary"
          id="addFavBtn"
          onClick={this.addVideoToFavourite}
        >
          Add To Favourite
        </button>
      </div>
    );
  }
}

//Object tomap state of redux to the props of the component

const mapStateToProps = state => {
  return {
    currentVideo: state.currentVideoReducer.currentVideo,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(VideoPlay); // Export the component
