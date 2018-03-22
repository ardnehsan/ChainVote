import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./loginForm.css";

class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      toggle,
      handleFormSubmit,
      handleInputChange,
      showWarning
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
        <Form className="loginForm">
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="JohnSnow@example.com"
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
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                required
              />
              <WarningBanner warn={showWarning} />
            </Col>
          </FormGroup>
        </Form>
        <Button
          size="lg"
          style={{
            backgroundColor: "#171f32",
            borderColor: "#FF611D",
            borderWidth: "2px",
            borderRadius: "40px"
          }}
          onClick={handleFormSubmit}
        >
          Login
        </Button>{" "}
        <Button
          size="lg"
          style={{
            backgroundColor: "#171f32",
            borderColor: "#FF611D",
            borderWidth: "2px",
            borderRadius: "40px"
          }}
          onClick={toggle}
        >
          {this.props.buttonLabel}Registration
        </Button>
      </div>
    );
  }
}
export default LoginForm;
