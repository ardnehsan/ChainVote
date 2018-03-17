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
  ModalFooter,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import API from "../../utils/API";

class LoginForm extends Component {
  render() {
    const {
      email, 
      password, 
      toggle, 
      handleFormSubmit, 
      handleInputChange
    } = this.props;


    return (
      <div className='container'>
        <Form>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input 
                type="email"
                name="email" 
                id="email" 
                placeholder="John" 
                value={email} 
                onChange={handleInputChange} 
                required
               />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Snow" 
                value={password} 
                onChange={handleInputChange} 
                required
               />
            </Col>
          </FormGroup>
      </Form>
      <Button color="primary" onClick={handleFormSubmit}>Login</Button>{' '}
      <Button color="secondary" onClick={toggle}>{this.props.buttonLabel}Registration</Button>
      </div>
    );
  }
}
export default LoginForm;