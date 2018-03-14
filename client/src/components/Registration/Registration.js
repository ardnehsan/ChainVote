import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Registration extends Component {
  
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
                      <Input type="firstName" name="firstName" id="firstName" placeholder="John" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="lastName" sm={2}>lastName</Label>
                    <Col sm={10}>
                      <Input type="lastName" name="lastName" id="lastName" placeholder="Snow" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="exampleEmail" placeholder="JohnSnow@something.com" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword" placeholder="" />
                    </Col>
                  </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Registration</Button>{''}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        );
      }
    }
export default Registration;