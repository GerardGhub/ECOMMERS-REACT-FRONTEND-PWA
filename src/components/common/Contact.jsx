import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US </h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us{" "}
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />

                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                    />

                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Message"
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      {" "}
                      Send{" "}
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL
                    36104 Email: Support@easylearningbd.com
                  </p>

                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1Yu-fPnd3rQRQrQqzhAcJBMXm5Lw&ehbc=2E312F"
                    width="600"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
