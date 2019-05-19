import { combineReducers } from "redux";

// Initial state of different variables when the app is reloaded

const initalStateLoading = {
  loading: false
};

const initalStateUser = {
  user: false
};

const initalSearchState = {
  videos: []
};

// Reducers to interact with the initial state using a switch statement

const loadingReducer = (state = initalStateLoading, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

const userReducer = (state = initalStateUser, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.user
      };
    case "SIGNOUT":
      return {
        ...state,
        user: false
      };
    default:
      return state;
  }
};

const searchReducer = (state = initalSearchState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        videos: action.videos
      };
    case "REMOVE_SEARCH":
      return {
        ...state,
        videos: []
      };
    default:
      return state;
  }
};

// Combine reducer combine all the reducers in one state

const rootReducer = combineReducers({
  loadingReducer,
  userReducer,
  searchReducer
});

export default rootReducer;
