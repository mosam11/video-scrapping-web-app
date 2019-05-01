import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "../components/userForm/userForm";
import SearchForm from "../components/searchForm/searchForm";
import UserInfo from "../components/userInfo/userInfo";

export default () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Route exact path="/" component={SearchForm} />
      <Route path="/userForm" component={UserForm} />
      <Route path="/userInfo" component={UserInfo} />
    </div>
  </Router>
);
