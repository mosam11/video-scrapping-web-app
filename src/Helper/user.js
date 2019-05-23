import { database } from "./firebase";
import { message } from "antd";

export const createAccount = userObj => {
  userObj = {
    ...userObj,
    videos: JSON.stringify([])
  }
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
      //Performing loop on all the objects
      var user = childSnapshot.val(); // .val() is uded to extract the actual object
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
    //once method get all data only one time
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
      // Cheking for match in userName and password
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
      // On found data display this
      if (found) {
        message.success("Login Successfully");
        // Returning found user
        return {
          userFound
        };
      } else {
        message.error("Sorry Incorrect Data");
        // Returning null
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

export const updateName = (newName, userId) => {
  database
    .ref(`users/${userId}`)
    .update({
      userName: newName
    })
    .then(() => {
      message.success("User Name Updated Successfully"); //On successfull insertion of data
    })
    .catch(() => {
      message.error("Error Occured"); //On error
    });
};

export const updatePassword = (newPassword, userId) => {
  database
    .ref(`users/${userId}`)
    .update({
      userPassword: newPassword
    })
    .then(() => {
      message.success("User Password Updated Successfully"); //On successfull insertion of data
    })
    .catch(() => {
      message.error("Error Occured"); //On error
    });
};

export const updatePasswordAndName = (newPassword, newName, userId) => {
  database
    .ref(`users/${userId}`)
    .update({
      userPassword: newPassword,
      userName: newName
    })
    .then(() => {
      message.success("User Password and Name Updated Successfully"); //On successfull insertion of data
    })
    .catch(() => {
      message.error("Error Occured"); //On error
    });
};
