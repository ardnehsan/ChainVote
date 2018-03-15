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
      <CardImg top width="100%" src="https://statetechmagazine.com/sites/statetechmagazine.com/files/styles/cdw_hero/public/articles/election2016.jpg?itok=2hBFuJp6" alt="Card image cap" />
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