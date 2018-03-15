import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";

class Registration extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      message: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    this.getVoter();
  }

  getVoter() {
    API.getVoter({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
      .then(res =>
        //if success API.saveVoter()
        this.setState({
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render(){
        return (
        <div>
             <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Registration</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Registration</ModalHeader>
          <ModalBody>
                    <Form>
                    <FormGroup row>
                    <Label for="firstName" sm={2}>firstName</Label>
                    <Col sm={10}>
                      <Input type="firstName" name="firstName" id="firstName" placeholder="John" value={this.props.firstName} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="lastName" sm={2}>lastName</Label>
                    <Col sm={10}>
                      <Input type="lastName" name="lastName" id="lastName" placeholder="Snow" value={this.props.lastName} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="email" placeholder="JohnSnow@something.com" value={this.props.email} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="password" placeholder="" value={this.props.password} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.handleFormSubmit}>Register</Button>{''}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        );
      }
    }
export default Registration;