import React from "react";
// Importing components to use in the routing
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "../components/userForm/userForm";
import SearchForm from "../components/searchForm/searchForm";
import UserInfo from "../components/userInfo/userInfo";
import SearchResult from "../components/searchResult/searchResult";
import Navbar from "../components/navbar/navbar";
import VideoPlay from "../components/videoPlay/videoPlay";

export default () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={SearchForm} />
      <Route path="/userForm" component={UserForm} />
      <Route path="/userInfo" component={UserInfo} />
      <Route path="/results" component={SearchResult} />
      <Route path="/play" component={VideoPlay} />
    </div>
  </Router>
);
