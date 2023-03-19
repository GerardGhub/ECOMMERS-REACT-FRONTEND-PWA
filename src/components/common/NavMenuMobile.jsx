import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Logo} from '../../assets/images/easyshop.png';

class NavMenuMobile extends Component {
  render() {
    return (
      <div>
       <Fragment>
          <div className="TopSectionDown">
            <Container
              fluid={true}
              className="fixed-top shadow-sm p-2 mb-0 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Button className="btn">
                    <i className="fa fa-bars"></i>
                  </Button>

                  <Link to="/">
                    {" "}
                    <img src="{Logo}" className="nav-logo" />
                  </Link>
                  <Button className="cart-btn">
                    <i className="fa fa-shopping-cart"> 3 Items</i>
                  </Button>
                </Col>
              </Row>

              <div className="sideNavOpen">
                <hr className="w-80" />
                <div className="list-group">
                  <a
                    href=""
                    className="list-group-item nav-font nav-itemmenu list-group-item-action"
                  >
                    <i className="fa mr-2 fa-home"></i>
                    Home
                  </a>
                </div>
              </div>
            </Container>
          </div>
          </Fragment>
      </div>
    );
  }
}

export default NavMenuMobile;
