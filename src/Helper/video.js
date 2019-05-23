import { database } from "./firebase";
import { message } from "antd";

export const addToFavVideo = (userObj, videos) => {
  database
    .ref(`users/${userObj.userId}`)
    .update({
      videos
    })
    .then(() => message.success("Video Added To Favoutite Successfully"))
    .catch(err => {
      console.log(err);
      message.error("Error Occured");
    });
};
