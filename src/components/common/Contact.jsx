import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    //alert(name);
    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;
    //alert(email);
    this.setState({ email: email });
  };

  messageOnChange = (event) => {
    let message = event.target.value;
    //alert(message);
    this.setState({ message: message });
  };

  
  onFormSubmit =(event)=>{
    alert("Hello hi");
    event.preventDefault();

}

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
                  <Form onSubmit={this.onFormSubmit} className="onboardForm">
                    <h4 className="section-title-login">CONTACT WITH US </h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us
                    </h6>
                    <input
                      type="text"
                      onChange={this.nameOnChange}
                      className="form-control m-2"
                      placeholder="Enter Your Name"
                    />

                    <input
                      type="email"
                      onChange={this.emailOnChange}
                      className="form-control m-2"
                      placeholder="Enter Your Email"
                    />

                    <Form.Control
                      onChange={this.messageOnChange}
                      className="form-control m-2"
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login"
                    >
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
                    width="550"
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
