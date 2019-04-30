import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "../components/userForm/userForm";
import SearchForm from "../components/searchForm/searchForm";

export default () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Route exact path="/" component={SearchForm} />
      <Route path="/userForm" component={UserForm} />
    </div>
  </Router>
);
