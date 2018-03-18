import React, { Component } from "react";
import { Link, Router } from 'react-router-dom';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Jumbotron,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import API from "../../utils/API";
import History from "../History";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        {/* REACT COMPONENT */}
          <div>
              {/* router links */}
              <Link to="/Report"><Button>History</Button></Link>
              <Link to="/vote"><Button>Vote</Button></Link>
              <h2>ChainVote is an application that allow users to create campaigns, and vote on other campaigns.
              ChainVote will help cut down time that it takes to count votes.</h2>
          </div>
      </div>
    );
  }

};

export default Landing;
