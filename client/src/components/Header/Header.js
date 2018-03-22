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
  Button,
  DropdownItem
} from "reactstrap";
import styles from './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  LogOut() {
    const authL = false;
    const authV = false;

    // localStorage.setItem("UAuthE", authE.toString());
    localStorage.setItem("UAuthL", authL);
    // localStorage.setItem("UAuthV", authV);

    // this.props.history.push("/")

    setTimeout(() => { window.location.reload(); }, 500);

  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const Logged = this.props.isLoggedIn ?
      (<Button className="logOut" onClick={this.LogOut}>Logout</Button>) :
      (<div></div>);

    return (
      <div className='header'>
        <Navbar color="faded" light expand="md">
          <img className='logo' href="/" />
          <NavbarBrand href="/" style={{ color: '#CCCFD3' }}>VoteChain<Button>Home</Button></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {Logged}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: '#CCCFD3' }}>
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
