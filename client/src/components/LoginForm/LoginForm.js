import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./loginForm.css";

class LoginForm extends Component {

  render() {
    const {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
      email,
      password,
      toggle,
      handleFormSubmit,
<<<<<<< HEAD
      handleInputChange
=======
      email, 
      password, 
      toggle, 
      handleFormSubmit, 
=======
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
      handleInputChange,
      showWarning
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
    } = this.props;

    function WarningBanner() {
      if (showWarning) {
        return (
          <div className="warning" color="red">
            Uh oh! This password doesn't match!
          </div>
        );
      }
      return null;
    }


    return (
      <div className="container">
        <Form>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
<<<<<<< HEAD
                placeholder="John"
=======
                placeholder="JohnSnow@example.com"
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
                value={email}
                onChange={handleInputChange}
                required
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
                id="password"
<<<<<<< HEAD
                placeholder="Snow"
=======
                placeholder="Password"
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
                value={password}
                onChange={handleInputChange}
                required
              />
              <WarningBanner warn={showWarning} />
            </Col>
          </FormGroup>
        </Form>
        <Button color="primary" onClick={handleFormSubmit}>
          Login
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          {this.props.buttonLabel}Registration
        </Button>
      </div>
    );
  }
<<<<<<< HEAD
// <<<<<<< HEAD
//     render(){
//         return (
//         <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Login</ModalHeader>
//           <ModalBody>
//                     <Form>
//                   <FormGroup row>
//                     <Label for="exampleEmail" sm={2}>Email</Label>
//                     <Col sm={10}>
//                       <Input type="email" name="email" id="exampleEmail" placeholder="John" />
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                     <Label for="examplePassword" sm={2}>Password</Label>
//                     <Col sm={10}>
//                       <Input type="password" name="password" id="examplePassword" placeholder="Snow" />
//                     </Col>
//                   </FormGroup>
//                   </Form>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary"><Link to="/campaign" eventName="onTouchTap">Login</Link></Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         </div>
      
    }
=======
}
>>>>>>> 5f70e117844f552a8ccdff14fd15d96ab41077de
export default LoginForm;
