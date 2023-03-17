import React, { Component } from "react";
import AppURL from "../api/AppURL";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProduct";
import axios from 'axios'

export class HomePage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch();
  };

  render() {
    return (
      <>
        <FeaturedProducts />
        <Categories />
      </>
    );
  }
}

export default HomePage;
