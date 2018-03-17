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
<<<<<<< HEAD

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
=======
  render() {
    const {
      email, 
      password, 
      toggle, 
      handleFormSubmit, 
      handleInputChange
    } = this.props;
>>>>>>> f69550b1de00a03008a6bd9832e8e47cf7bf8b38


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
<<<<<<< HEAD
    render(){
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
                      <Input type="email" name="email" id="exampleEmail" placeholder="John" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                      <Input type="password" name="password" id="examplePassword" placeholder="Snow" />
                    </Col>
                  </FormGroup>
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"><Link to="/campaign" eventName="onTouchTap">Login</Link></Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        );
      }
    }
export default LoginForm;
=======
}
export default LoginForm;
>>>>>>> f69550b1de00a03008a6bd9832e8e47cf7bf8b38
