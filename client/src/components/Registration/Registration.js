import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";
const SHA256 = require('crypto-js/sha256');

function WarningBanner(props) {
  if (props.warn) {
    return (
      <div className="warning" color="red">
        Uh oh! This password doesn't match!
    </div>
    );  
  }
  return null;
  
}
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      showWarning: false
    };
  
    this.checkPassword = this.checkPassword.bind(this);
    // this.handleConfirmPass = this.handleConfirmPass.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  checkPassword() {
    if (this.state.cpassword === this.state.password) {
      this.setState(prevState => ({
        showWarning: false
      }));
      this.register();
    } else {
      this.setState(prevState => ({
        showWarning: true
      }));
    }
  };

  handleFormRegister = event => {
    event.preventDefault();
    this.register();
  };

  register () {
  //======remove this toggle later so it doesn't clear state
  this.props.toggle();
  //===================================================
  const concealer = SHA256(this.state.password).toString();

  //checks registry for the name & isRegistered bool
  API.checkRegistry({
    firstName: this.state.firstName,
    lastName: this.state.lastName
  })
    .then(res => {
      //depending on the Registered answer, we either update DB
      console.log(res.data);
      const response = res.data;

      if (response === null) {
        //swap this alert for a better notification
        alert("Uh oh! It looks like you're not eligible to register at this time!");

        //or kickback the user    
      } else {
        if (response.isRegistered === true) {
          alert("Uh oh! It looks like you've already registered!")
        } else {
          console.log(res.data);
          API.register({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: concealer
          });
          //add a page redirect here or say success!
        }
      }
    })
    .catch(err => console.log(err));
};


  render() {
    const {
      modal,
      toggle,
    } = this.props

    return (
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={toggle}>Register</ModalHeader>
          <ModalBody>
                    <Form>
                    <FormGroup row>
                    <Label for="firstName" sm={2}>First Name</Label>
                    <Col sm={10}>
                      <Input type="firstName" name="firstName" id="firstName" placeholder="John" value={this.state.firstName} onChange={this.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="lastName" sm={2}>Last Name</Label>
                    <Col sm={10}>
                  <Input type="lastName" name="lastName" id="lastName" placeholder="Snow" value={this.state.lastName} onChange={this.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                  <Input type="email" name="email" id="email" placeholder="JohnSnow@something.com" value={this.state.email} onChange={this.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                  <Input type="password" name="password" id="password" placeholder="" value={this.state.password} onChange={this.handleInputChange} required />
                    </Col>
                  </FormGroup>
              <FormGroup row>
                <Label for="cpassword" sm={2}>Confirm Password</Label>
                <Col sm={10}>
                  <Input type="password" name="cpassword" id="cpassword" 
                    placeholder="" value={this.state.cpassword} onChange={this.handleInputChange} 
                  required />
                  <div>
                    <WarningBanner warn={this.state.showWarning} />
                  </div>
                </Col>
              </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.checkPassword}>Register</Button>{''}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Registration;
