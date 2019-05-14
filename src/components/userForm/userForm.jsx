import React, { Component } from "react";
import { Link } from "react-router-dom"; // In replacement of a in react
import { connect } from "react-redux"; // To connect this component with redux
import { userSignIn } from "../../store/action"; //to SignIn and setting up user i redux
import uuid from "uuid"; //To generate unique Ids for the user
import { message } from "antd"; // To show different message import from ant design
import { createAccount, signInUser } from "../../Helper/user"; // A helper method to create the user

// user form component
class UserForm extends Component {
  // To run some code when a componet is mounted
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

  // Function to create a function
  createUser = () => {
    const userId = uuid(); // Generating unique Id
    // Getting nameValue from user Input
    const userName = document.getElementById("userName").value;

    // Getting emailValue from user Input
    const userEmail = document.getElementById("userEmail").value;

    // Getting passwordValue from user Input
    const userPassword = document.getElementById("userPassword").value;

    //Creating an object from properties to store this in the firebase
    const userObj = {
      userId,
      userName,
      userEmail,
      userPassword
    };

    // Checking if the user has not put name, email or password
    if (!userName || !userEmail || !userPassword) {
      // Displaying the message when we user did not give data
      return message.error("Please Input Data Currectly");
    } else if (userPassword.length < 8) {
      // checking if password length is less than 8
      // Displaying error message when password length is not 8
      return message.error("Password Must Be Atleast 8 Character Long");
    } else {
      // calling a function to create the user and passing the object
      return createAccount(userObj);
    }
  };

  // Checking for sign in data
  loginUserComponent = () => {
    let self = this; // Referencing to the current component

    // Getting user email from sign in form
    const userEmail = document.getElementById("signInEmail").value;

    // Getting user password from sign in form
    const userPassword = document.getElementById("signInPassword").value;

    // Checking if email or password is missing
    if (!userEmail || !userPassword) {
      // Displaying error message
      return message.error("Please Input Data Currectly");
    } else {
      // Cheking if a user exists using signInUser function
      signInUser(userEmail, userPassword).then(data => {
        if (data.userFound) {
          // If user is found
          self.props.userSignIn(data.userFound); // Signing In and setting user in the redux
          self.props.history.push("/userInfo"); // Changing the route dynamically
        }
      });
    }
  };
  render() {
    return (
      <div id="mainUserForm">
        <div className="form-structor">
          <div className="signup">
            <h1 className="form-title" id="signup">
              <span>or</span>Sign up
            </h1>
            <div className="form-holder">
              {/* Sign Up Input Elements */}
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
                {/* Sign in Elements */}
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
        <Link to="/" style={{ margin: "2%" }}>
          Go to Search Page
        </Link>
      </div>
    );
  }
}

// Mapping out userSignIn with the dispatch and adding that in the props of the components
const mapDispatchToProps = dispatch => ({
  userSignIn: user => dispatch(userSignIn(user))
});

// Connecting the component with redux
export default connect(
  null, // Here could be stateToProps if we want to use redux state here
  mapDispatchToProps // Giving out functions that we want to map with the reduce dispatch
)(UserForm);
