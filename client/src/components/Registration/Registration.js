import React, { Component } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";


class Registration extends Component {

  render() {
    const {
      modal,
      firstName,
      lastName,
      email,
      password,
      cpassword,
      toggle,
      handleFormRegister,
      handleInputChange,
      showWarning,
      handleConfirmPass
    } = this.props
    function WarningBanner() {
      if (showWarning) {
        return null
      }

      return (
        <div className="warning" color="red">
          Uh oh! This password doesn't match!
        </div>
      );
    }

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
                      <Input type="firstName" name="firstName" id="firstName" placeholder="John" value={firstName} onChange={handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="lastName" sm={2}>Last Name</Label>
                    <Col sm={10}>
                      <Input type="lastName" name="lastName" id="lastName" placeholder="Snow" value={lastName} onChange={handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="email" placeholder="JohnSnow@something.com" value={email} onChange={handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="password" placeholder="" value={password} onChange={handleInputChange} required />
                    </Col>
                  </FormGroup>
              <FormGroup row>
                <Label for="cpassword" sm={2}>Confirm Password</Label>
                <Col sm={10}>
                  <Input type="password" name="cpassword" id="cpassword" 
                  placeholder="" value={cpassword} onChange={handleConfirmPass} 
                  required />
                  <div>
                    <WarningBanner warn={showWarning} />
                  </div>
                </Col>
              </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleFormRegister}>Register</Button>{''}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Registration;
