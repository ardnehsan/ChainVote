import React, { Component } from "react";
import { Link } from 'react-router-dom';
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

class Landing extends Component {
        render() {
        return(
            <div classname="container">
                <Button color="danger" onClick={this.props.handleFormSubmit}>Votes</Button>{' '}
                <Button color="danger" onClick={this.props.handleFormSubmit}>History</Button>{' '}
                
                <h2>Vote Chain is a voting app that allow users to create campaigns and allow other users to vote.
                This app is unique due to registration that has been create using our database. Only user who has been granted permission can enter the campaign to vote.</h2>
            </div>

        )
    };
};
export default Landing;