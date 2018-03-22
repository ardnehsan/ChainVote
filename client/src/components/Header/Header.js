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
import "./Header.css";
const SHA256 = require("crypto-js/sha256");

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
    setTimeout(() => { window.location = "/"; }, 500);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      // isLoggedIn,
      UPrivateKey,
      // UserEmail,
      UserFName,
      // UserLName,
      // UisRegistered,
      // UhasVoted
    } = this.props;
    // console.log(this.props);
    const Keys = this.props.isLoggedIn ?
      (<div>
        <h2>{this.props.UserFName}</h2>
        <h3>Your private key is {this.props.UPrivateKey}</h3>
        <h3>Your public key is {SHA256(this.props.UPrivateKey).toString()}</h3>
        </div>    
      ) : (
        <div>
        </div>);
    const Logged = this.props.isLoggedIn ?
      (<DropdownItem>
        <NavItem>
          <NavLink onClick={this.LogOut}>
            Logout
          </NavLink>
        </NavItem>
      </DropdownItem>
      ) : (
      <div>     
      </div>);

    return (
      <div className="header">
        {/* {Keys} */}
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" style={{ color: '#CCCFD3' }}><Button className="homeBtn">Home</Button></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* {Logged} */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: "#CCCFD3" }}>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavItem>
                      <NavLink
                        href="https://github.com/ardnehsan/ChainVote"
                        target="_blank">
                        Github
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="./about">
                        Developers
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                  {Logged}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
