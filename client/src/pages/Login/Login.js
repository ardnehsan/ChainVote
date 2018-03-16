import React, { Component } from "react";
import { Card, CardImg, Button, CardTitle, CardText } from "reactstrap";
import LoginForm from "../../components/LoginForm";
import Registration from "../../components/Registration";
import styles from './login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginBox">
      <Card body outline color="primary">
          <CardTitle className="text-center title">CAST YOUR VOTE!</CardTitle>
          <CardText className="text-center subtitle">Let your voice be heard!</CardText>
          <LoginForm />
          <Registration />
        </Card>
      </div>
    );
  }
}

export default Login;