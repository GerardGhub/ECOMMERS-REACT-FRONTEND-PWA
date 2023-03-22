import React, { Component } from "react";
import { Switch, Route, Router } from "react-router";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";

class AppRoute extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </>
    );
  }
}

export default AppRoute;
