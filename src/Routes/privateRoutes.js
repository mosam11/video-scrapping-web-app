import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { message } from "antd";

export const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => {
      if (!user) {
        message.error("Please Login First");
      }
      return user ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/userForm" />
      );
    }}
  />
);

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps)(PrivateRoute);
