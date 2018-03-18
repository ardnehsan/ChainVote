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
