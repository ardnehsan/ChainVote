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
  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          {this.props.buttonLabel}Registration
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="email" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </Col>
              </FormGroup>
              <FormGroup row />

               <FormGroup row>
                <Label for="password" sm={2}>
                  Repeat Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="repeat password"
                  />
                </Col>
              </FormGroup>
              <FormGroup row />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Register
            </Button>
            {""}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Registration;
