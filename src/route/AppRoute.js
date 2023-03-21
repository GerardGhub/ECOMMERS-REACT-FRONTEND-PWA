import React, { Component } from "react";
import { Switch, Route, Router } from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";

class AppRoute extends Component {
  render() {
    return (
      <>
       <Switch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/login" component={UserLoginPage} />
          </Switch>
      </>
    );
  }
}

export default AppRoute;
