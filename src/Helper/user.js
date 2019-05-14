import { database } from "./firebase";
import { message } from "antd";

export const createAccount = userObj => {
  getAllUsersEmail().then(emailArr => {
    if (emailArr.indexOf(userObj.userEmail) === -1) {
      database
        .ref("/users/" + userObj.userId) //accessing database
        .set(userObj) //Inserting data to the database
        .then(() => {
          message.success("User Created Successfully"); //On successfull insertion of data
        })
        .catch(() => {
          message.error("Error Occured"); //On error
        });
    } else {
      message.error("User Already Exists");
    }
  });
};

export const getAllUsersEmail = () => {
  let users = [];
  var leadsRef = database.ref("users/"); //accessing database
  return leadsRef.once("value").then(snapshot => {
    snapshot.forEach(function(childSnapshot) {
      var user = childSnapshot.val();
      user = user.userEmail;
      users.push(user);
    });
    return users;
  });
};
export const getAllUsers = () => {
  let users = [];
  var leadsRef = database.ref("users/");
  return leadsRef.once("value").then(snapshot => {
    snapshot.forEach(function(childSnapshot) {
      var user = childSnapshot.val();
      users.push(user);
    });
    return users;
  });
};

export const signInUser = (userEmail, userPassword) => {
  // Getting data from the database
  let users = [],
    found = false,
    userFound = false;
  return database
    .ref("users")
    .once("value")
    .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        var user = childSnapshot.val();
        // console.log(user);
        users.push(user);
      });

      users.forEach(user => {
        if (
          userEmail === user.userEmail &&
          userPassword === user.userPassword
        ) {
          found = true;
          userFound = user;
        }
        return;
      });
      if (found) {
        message.success("Login Successfully");
        return {
          userFound,
          found
        };
      } else {
        message.error("Sorry Incorrect Data");
        return {
          userFound: null
        };
      }
    })
    .catch(err => {
      message.error(err.message);
      console.log(err);
    });
};
