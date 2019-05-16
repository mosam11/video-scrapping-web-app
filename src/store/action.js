export const loadingStart = () => {
  return {
    type: "START_LOADING"
  };
};

export const loadingStop = () => {
  return {
    type: "STOP_LOADING"
  };
};

export const userSignIn = user => {
  return {
    type: "SIGNIN",
    user
  };
};

export const userSignOut = () => {
  return {
    type: "SIGNOUT"
  };
};

export const setSearchVideos = videos => {
  return {
    type: "SET_SEARCH",
    videos
  };
};

export const setSearchVideosToDefault = () => {
  return {
    type: "REMOVE_SEARCH"
  };
};
