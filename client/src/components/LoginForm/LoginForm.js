import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Landing from "../pages/Landing";

//import './l'
class LoginForm extends Component {
  goTo(route){
    //goes to landing page
    this.props.history.replace(`/${Landing}`)
  }
//auth to login
login() {
  this.props.auth.login();
}
//auth or logout
logout(){
  this.props.auth.logout();
}
//
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render(){

      //added line to authenticte
      const { isAuthenticated } = this.props.auth;
      //
        return (
        <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
                    <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                      <Button>Submit</Button>
                  </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            {!isAuthenticated() && (<Button color="primary" onClick={this.toggle}>Login</Button>)}
            {isAuthenticated() && (<Button color="secondary" onClick={this.toggle}>Cancel</Button>)}
          </ModalFooter>
        </Modal>
        </div>
        );
      }
    }
export default LoginForm;
