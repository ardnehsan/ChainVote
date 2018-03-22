<<<<<<< HEAD

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styles from './footer.css'

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
      <div className='header'>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" style={{color:'#CCCFD3'}} className="Logo">ChainVote © Copyright 2018</NavbarBrand>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
=======
import React from "react";
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
=======
import React from "react";

const divStyle = {
  borderTop: "#FF611D",
  borderTStyle: "solid",
  borderTopWidth: "8px",
  position: "fixed",
  left: 0,
  bottom: 0,
  backgroundColor: "#171f32",
};
const pStyle = {
  color: "white",
  textAlign: "center"
};

const Footer = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Footer;
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
=======
>>>>>>> b6ec159de3a3cc6ae235dabbaa7e36e5e1cc6b93
