import React, { Component } from "react";
import { database } from "../../Helper/firebase";
import uuid from "uuid"; //To generate unique Ids for the user
import { message } from "antd";
import { createAccount, loginUser } from "../../Helper/user";

class UserForm extends Component {
  componentDidMount() {
    console.clear();
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    loginBtn.addEventListener("click", e => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find(element => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          signupBtn.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });

    signupBtn.addEventListener("click", e => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find(element => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    });
  }
  createUser = () => {
    const userId = uuid();
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;
    const userObj = {
      userId,
      userName,
      userEmail,
      userPassword
    };
    if (!userName || !userEmail || !userPassword) {
      return message.error("Please Input Data Currectly");
    } else {
      return createAccount(userObj);
    }
  };
  loginUserComponent = () => {
    const userEmail = document.getElementById("signInEmail").value;
    const userPassword = document.getElementById("signInPassword").value;
    if (!userEmail || !userPassword) {
      return message.error("Please Input Data Currectly");
    } else {
      return loginUser(userEmail, userPassword);
    }
  };
  render() {
    return (
      <div>
        <div className="form-structor">
          <div className="signup">
            <h1 className="form-title" id="signup">
              <span>or</span>Sign up
            </h1>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                placeholder="Name"
                id="userName"
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                id="userEmail"
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                id="userPassword"
              />
            </div>
            <button className="submit-btn" onClick={this.createUser}>
              Sign up
            </button>
          </div>
          <div className="login slide-up">
            <div className="center">
              <h2 className="form-title" id="login">
                <span>or</span>Log in
              </h2>
              <div className="form-holder">
                <input
                  type="email"
                  className="input"
                  id="signInEmail"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  id="signInPassword"
                />
              </div>
              <button className="submit-btn" onClick={this.loginUserComponent}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
