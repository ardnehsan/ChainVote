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
import styles from './Header.css'

export default class Header extends React.Component {
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
          <NavbarBrand href="/" style={{color:'#CCCFD3'}}>Chain Vote</NavbarBrand>
          <img className='logo' alt='ChainVote'/>
          C:\Users\David\Desktop\ChainVote\client\src\img\LogoSingle.png
          C:\Users\David\Desktop\ChainVote\client\src\components\Header\Header.js
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:'#CCCFD3'}}>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="https://github.com/ardnehsan/ChainVote" target="_blank">
                        Github
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="./about">Developers</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
