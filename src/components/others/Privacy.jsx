import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Privacy extends Component {
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
              <h4 className="section-title-login">Privacy Page </h4>
              <p className="section-title-contact">
                I started to learn how to code when I was a 2nd year college , at my
                first job as IT Specialist I experience all the different type
                of MIS work such as Networking , CCTV Configuration, Graphic
                Designing, Server Configuration, Hardware & Software
                troubleshooting System Support for the existing system and
                client concern for their technical concern aside of that we
                maintain our existing system as a programmer and Developer for
                the new system, after all I decided to chose software
                development for my career growth programming gave me happiness
                specially on successfully debugging a bug. during my journey as
                software developer I invest a time on learning a full stack
                development using the latest technologies. and also I'm dreaming
                to work on It Industry
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;

