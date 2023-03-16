import { Button } from "react-bootstrap";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <Button className="me-4" variant="warning">pindot </Button>
        <Button variant="info"> <i className="fa fa-home"></i> </Button>
      </div>
    );
  }
}

export default App;
