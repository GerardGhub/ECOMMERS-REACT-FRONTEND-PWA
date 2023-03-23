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

class AppRoute extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />

          <Route exact path="/productdetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </>
    );
  }
}

export default AppRoute;
