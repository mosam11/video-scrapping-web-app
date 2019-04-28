import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "../components/userForm/userForm";
import SearchForm from "../components/searchForm/searchForm";

export default () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <Route exact path="/" component={UserForm} />
      <Route path="/search" component={SearchForm} />
    </div>
  </Router>
);
