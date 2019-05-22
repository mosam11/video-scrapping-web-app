import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

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
          <Link to="/userForm" className="navItem">
            Login
          </Link>
          <Link to="/userInfo" className="navItem">
            Profile
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
