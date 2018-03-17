import React, { Component } from "react";
<<<<<<< HEAD
import { Link, Router } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 51497c437d996f6c676c3e0fcbd7f52b2f121ec7
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
<<<<<<< HEAD
  render() {
    return (
      <div className="container">
        {/* REACT COMPONENT */}
          <div>
              {/* router links */}
              <Link to="/history"><Button>History</Button></Link>
              <Link to="/vote"><Button>Vote</Button></Link>
              <h2>ChainVote is an application that allow users to create campaigns, and vote on other campaigns.
              ChainVote will help cut down time that it takes to count votes.</h2>
          </div>
      </div>
    );
  }
}
=======
        render() {
        return(
            <div classname="container">
                <Button color="danger" onClick={this.props.handleFormSubmit}>Votes</Button>{' '}
                <Button color="danger" onClick={this.props.handleFormSubmit}>History</Button>{' '}
                
                <h2>Vote Chain is a voting app that allow users to create campaigns and allow other users to vote.
                This app is unique due to registration that has been create using our database. Only user who has been granted permission can enter the campaign to vote.</h2>
            </div>
>>>>>>> 51497c437d996f6c676c3e0fcbd7f52b2f121ec7

        )
    };
};
export default Landing;