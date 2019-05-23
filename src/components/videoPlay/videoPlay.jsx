import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux
import { message } from "antd";
import { updateUserVideos } from "../../Helper/video";
import { userSignIn } from "../../store/action"; //to SignIn and setting up user i redux

class VideoPlay extends Component {
  addVideoToFavourite = () => {
    // .. chacking if the user has logged in
    if (!this.props.user) {
      return message.error("Please Login First");
    }
    // Assigning id for either youtube or dailymotion
    let videoToAddId = this.props.currentVideo.id.videoId
        ? this.props.currentVideo.id.videoId
        : this.props.currentVideo.id,
      dublicate = false, // Check if the video is already there
      userVideos = JSON.parse(this.props.user.videos);
    userVideos.map(video => {
      let videoId = video.id.videoId
        ? this.props.currentVideo.id.videoId
        : video.id;
      if (videoId === videoToAddId) {
        dublicate = true;
      }
    });
    if (dublicate) {
      return message.error("Video is already in the favourite list");
    }
    userVideos.push(this.props.currentVideo);
    userVideos = JSON.stringify(userVideos);
    updateUserVideos(this.props.user.userId, userVideos); // To update the db of user
    this.props.userSignIn({
      ...this.props.user,
      videos: userVideos
    });
  };
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
          // src="https://www.youtube.com/embed/Vl_nqL9PKTs"
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

const mapDispatchToProps = dispatch => ({
  userSignIn: user => dispatch(userSignIn(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlay); // Export the component
