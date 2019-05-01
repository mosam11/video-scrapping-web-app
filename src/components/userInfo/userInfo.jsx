import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    return (
      <div>
        <h1>Wellcome {this.props.user.userName}!</h1>
        <h2>All Favourite Videos</h2>
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
