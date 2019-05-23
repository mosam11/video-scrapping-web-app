import React from "react";
// Importing components to use in the routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "../components/userForm/userForm";
import SearchForm from "../components/searchForm/searchForm";
import UserInfo from "../components/userInfo/userInfo";
import SearchResult from "../components/searchResult/searchResult";
import Navbar from "../components/navbar/navbar";
import VideoPlay from "../components/videoPlay/videoPlay";
import PrivateRoute from "./privateRoutes";
import PublicRoute from "./publicRoutes";

export default () => (
  <Router>
    <div>
      <Navbar />
      <PublicRoute exact path="/" component={SearchForm} />
      <PublicRoute path="/userForm" component={UserForm} />
      <PrivateRoute path="/userInfo" component={UserInfo} />
      <PublicRoute path="/results" component={SearchResult} />
      <PublicRoute path="/play" component={VideoPlay} />
    </div>
  </Router>
);
