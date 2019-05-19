import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux
//PopConfirm for delete confirm and message to give user feedback about the task
import { Popconfirm, message, Modal } from "antd";
import {
  updateName,
  updatePassword,
  updatePasswordAndName
} from "../../Helper/user"; //Importing update name function
import { userSignIn } from "../../store/action"; //to SignIn and setting up user i redux

class UserInfo extends Component {
  state = {
    loading: false,
    visible: false,
    edited: false,
    user: { userName: "" }
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  // To close the modal
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  editProfile = e => {
    e.preventDefault();
    let userName = this.state.user.userName;
    let userOldPassword = document.getElementById("userOldPassword").value;
    let userNewPassword = document.getElementById("userNewPassword").value;
    let self = this;

    // Checking if a user typed old and new password and if the password matches
    if (userName !== this.props.user.userName && !userOldPassword) {
      updateName(userName, this.props.user.userId);
      self.props.userSignIn({
        ...this.props.user,
        userName
      });
      //Only Update Name Here
      self.closeModal(); //To close modal
      // console.log("Name");
    } else if (
      userOldPassword === this.props.user.userPassword &&
      userName === this.props.user.userName &&
      userNewPassword.length >= 8
    ) {
      updatePassword(userNewPassword, this.props.user.userId);
      // Only Password Update Here
      self.closeModal(); //To close modal
      // console.log("Password");
    } else if (
      userOldPassword === this.props.user.userPassword &&
      userName !== this.props.user.userName &&
      userNewPassword
    ) {
      // Update Password and userName  Here
      updatePasswordAndName(userNewPassword, userName, this.props.user.userId);
      self.props.userSignIn({
        ...this.props.user,
        userName
      });
      self.closeModal(); //To close modal
      // console.log("Password + Name");
    } else if (
      (userOldPassword && userOldPassword !== this.props.user.userPassword) ||
      userOldPassword !== this.props.user.userPassword ||
      userNewPassword.length < 8
    ) {
      message.error("Please Provide Currect Data");
    } else if (userOldPassword && !userNewPassword) {
      self.closeModal(); //To close modal
    } else {
      // Nothing change Here
      // console.log("Nothing");
      self.closeModal(); //To close modal
    }
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  // This will run if a user confirm in the confirmation of delete button
  confirm = e => {
    // console.log(e);
    message.success("Video Deleted Successfully");
  };

  // This will run if a user cancel in the confirmation of delete button
  cancel = e => {
    // console.log(e);
    message.error("Video Deletion Canceled");
  };
  componentDidMount() {
    this.setState({
      user: this.props.user ? this.props.user : { userName: "" }
    });
  }
  updateName = () => {
    let userName = document.getElementById("userName").value; //Getting Input Value
    //Setting up the value in state object
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        userName
      },
      edited: true
    }));
  };
  render() {
    const { visible, loading } = this.state; // Destructing the state
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
            onClick={this.showModal}
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
        <Modal
          visible={visible}
          title="Edit Profile Info"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <form onSubmit={this.editProfile} id="editProfileForm">
            <fieldset>
              <legend>Update Name</legend>
              <input
                type="text"
                id="userName"
                value={this.state.user.userName}
                onChange={this.updateName}
              />
            </fieldset>
            <fieldset>
              <legend>Update Password</legend>
              <label htmlFor="userOldPassword">
                <span className="labelText">Enter Old Password</span>
                <input type="password" id="userOldPassword" />
              </label>
              <label htmlFor="userNewPassword">
                <span className="labelText">Enter New Password</span>
                <input type="password" id="userNewPassword" />
              </label>
            </fieldset>
            <button className="btn btn--primary" type="submit">
              Submit
            </button>
          </form>
        </Modal>
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

// Mapping out userSignIn with the dispatch and adding that in the props of the components
const mapDispatchToProps = dispatch => ({
  userSignIn: user => dispatch(userSignIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
