import { database } from "./firebase";
import { message } from "antd";

export const createAccount = userObj => {
  getAllUsersEmail().then(emailArr => {
    if (emailArr.indexOf(userObj.userEmail) === -1) {
      database
        .ref("/users/" + userObj.userId)
        .set(userObj)
        .then(() => {
          message.success("User Created Successfully");
        })
        .catch(() => {
          message.error("Error Occured");
        });
    } else {
      message.error("User Already Exists");
    }
  });
};

export const getAllUsersEmail = () => {
  let users = [];
  var leadsRef = database.ref("users/");
  return leadsRef.once("value").then(snapshot => {
    snapshot.forEach(function(childSnapshot) {
      var user = childSnapshot.val();
      user = user.userEmail;
      users.push(user);
    });
    return users;
  });
};
