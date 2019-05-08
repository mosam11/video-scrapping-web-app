import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    const videos = [
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      },
      {
        thumb:
          "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?k=6&m=511366776&s=612x612&w=0&h=FiyKvGeHCGbVLce6bkW7P7SzgC57V18jUcj0bs9Nv4w=",
        title: "Video Title",
        details:
          "LoremLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  ipsum"
      }
    ];
    return (
      <div id="userInfoMain">
        <div id="mainDivTitle">
          <h1>Wellcome {this.props.user.userName}!</h1>
          <button
            type="submit"
            className="btn btn--primary"
            id="editProfileBtn"
          >
            Edit Profile Info
          </button>
          <h2>All Favourite Videos</h2>
        </div>
        <div id="videoCardContainer">
          {videos.length === 0 ? (
            <span>No Video</span>
          ) : (
            videos.map((video, index) => {
              return (
                <div className="videoCard" key={index}>
                  <img
                    className="videoCardImg"
                    src={video.thumb}
                    alt={video.title}
                  />
                  <h2>{video.title}</h2>
                  <p>{video.details}</p>
                  <button
                    type="submit"
                    className="btn btn--primary playBtn videoCardBtn"
                  >
                    Play
                  </button>
                  
                  <button
                    type="submit"
                    className="btn btn--primary delBtn"
                  >
                    Delete
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(UserInfo);
