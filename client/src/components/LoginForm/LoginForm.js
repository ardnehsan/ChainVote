import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
  ModalFooter,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import API from "../../utils/API";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      message: "",
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
    this.login();
  }

  login() {
    API.login({
      email: this.state.email,
      password: this.state.password
    })
      .then(res =>
        this.setState({
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
        //if success API.login()
        //if login success redirect page
      )
      .catch(err => console.log(err));
  };

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
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                      <Input type="email" name="email" id="email" placeholder="John" value={this.props.email} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="password" placeholder="Snow" value={this.props.password} onChange={this.props.handleInputChange} required />
                    </Col>
                  </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.handleFormSubmit}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default LoginForm;