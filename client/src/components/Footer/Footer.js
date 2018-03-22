import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import "./footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container">
        <div className="footer text-center">
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/" style={{ color: "#CCCFD3", textAlign: "center" }}>
              ChainVote © Copyright 2018
            </NavbarBrand>
            <Nav className="ml-auto" navbar />
          </Navbar>
        </div>
      </div>
    );
  }
}