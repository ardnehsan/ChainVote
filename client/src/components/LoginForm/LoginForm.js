import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import styles from './loginForm.css';

class LoginForm extends Component {
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

  render() {
    return (
      <div className='container'>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}Login
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Login
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default LoginForm;