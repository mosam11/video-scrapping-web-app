import { combineReducers } from "redux";

const initalStateLoading = {
  loading: false
};

const initalStateUser = {
  user: false
};

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

const rootReducer = combineReducers({
  loadingReducer,
  userReducer
});

export default rootReducer;
