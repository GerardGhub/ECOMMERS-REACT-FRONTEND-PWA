import React, { Component } from "react";
import { Switch, Route } from "react-router";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import UserLoginPage from "../pages/UserLoginPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavoritePage from "../pages/FavoritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import axios from "axios";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import AppURL from "../api/AppURL";

class AppRoute extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.UserData)
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <>
        <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} /> } />

          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />

          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/about" component={AboutPage} />

          <Route
            exact
            path="/register"
            render={(props) => <RegisterPage {...props} key={Date.now()} />}
          />

          <Route
            exact
            path="/forget"
            render={(props) => (
              <ForgetPasswordPage {...props} key={Date.now()} />
            )}
          />

          <Route
            exact
            path="/reset/:id"
            render={(props) => (
              <ResetPasswordPage {...props} key={Date.now()} />
            )}
          />

<Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />



        </Switch>
      </>
    );
  }
}

export default AppRoute;
