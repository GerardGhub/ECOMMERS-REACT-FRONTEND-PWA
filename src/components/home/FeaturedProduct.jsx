import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://i.pinimg.com/564x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    Python Programming Language, Data Science
                  </p>
                  <p className="product-price-on-card">Price : 120</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
