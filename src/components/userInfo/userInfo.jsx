import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux
//PopConfirm for delete confirm and message to give user feedback about the task
import { Popconfirm, message } from "antd";

class UserInfo extends Component {
  // This will run if a user confirm in the confirmation of delete button
  confirm = e => {
    console.log(e);
    message.success("Video Deleted Successfully");
  };

  // This will run if a user cancel in the confirmation of delete button
  cancel = e => {
    console.log(e);
    message.error("Video Deletion Canceled");
  };

  render() {
    const videos = [
      // dummy data for the videos
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
          <h1 className="whiteTxt">Wellcome {this.props.user.userName}!</h1>
          <button
            type="submit"
            className="btn btn--primary"
            id="editProfileBtn"
          >
            Edit Profile Info
          </button>
          <h2 className="whiteTxt">All Favourite Videos</h2>
        </div>
        <div id="videoCardContainer" className="centerBlockItems">
          {/* checking whether user has video or not and render them according to that */}
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
                  <h2 className="videoCardTitle whiteTxt">{video.title}</h2>
                  <p className="videoCardDetail whiteTxt">{video.details}</p>
                  <button
                    type="submit"
                    className="btn btn--primary playBtn videoCardBtn"
                  >
                    Play
                  </button>
                  {/* Using Popconfirm for delete button */}
                  <Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    {/* button inside the PopConfirm */}
                    <button
                      type="submit"
                      className="btn videoCardBtn btn--primary delBtn"
                    >
                      Delete
                    </button>
                  </Popconfirm>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

//Object tomap state of redux to the props of the component

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(UserInfo);
