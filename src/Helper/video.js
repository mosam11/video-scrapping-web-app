import { database } from "./firebase";
import { message } from "antd";

export const updateUserVideos = (userId, videos) => {
  console.log(userId,videos)
  database
    .ref(`users/${userId}`)
    .update({
      videos
    })
    .then(() => message.success("Videos Updated Successfully"))
    .catch(err => {
      console.log(err);
      message.error("Error Occured");
    });
};
