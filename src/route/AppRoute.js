import React, { Component } from "react";
import { Switch, Route, Router } from "react-router";
import HomePage from "../pages/HomePage";

class AppRoute extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default AppRoute;
