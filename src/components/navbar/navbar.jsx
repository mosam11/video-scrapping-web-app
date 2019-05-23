import React, { Component } from "react";
import { connect } from "react-redux"; // To connect our component with the redux
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { userSignOut } from "../../store/action";
import { message } from "antd";

class Navbar extends Component {
  render() {
    return (
      <div id="mainNavContainer">
        <Link to="/">
          <img src={logo} alt="logo" id="logoImg" />
        </Link>
        <div id="navLinkContainer">
          <Link to="/" className="navItem">
            Home
          </Link>
          {this.props.user === false ? (
            <Link to="/userForm" className="navItem">
              Login
            </Link>
          ) : (
            <Link
              to="/userForm"
              onClick={() => {
                this.props.userSignOut();
                message.success("User SignOut");
              }}
              className="navItem"
            >
              Logout
            </Link>
          )}

          {this.props.user !== false && (
            <Link to="/userInfo" className="navItem">
              {this.props.user.userName}
            </Link>
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
// Mapping out userSignIn with the dispatch and adding that in the props of the components
const mapDispatchToProps = dispatch => ({
  userSignOut: _ => dispatch(userSignOut()) // Mapping actions of redux to props
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
