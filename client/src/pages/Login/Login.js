import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import LoginForm from "../../components/LoginForm";
import Registration from "../../components/Registration";
import styles from "./login.css";
import API from "../../utils/API";
import { Link, Router } from "react-router-dom";
//imports hashing function
const SHA256 = require("crypto-js/sha256");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      showWarning: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleConfirmPass = this.handleConfirmPass.bind(this);
  }

  handleConfirmPass = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.checkPassword();
      }
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.login();
  };

  login = () => {
    //conceals the password from us
    const concealer = SHA256(this.state.password).toString();
    console.log(concealer);
    API.login({
      email: this.state.email,
      //conceals the password from others
      password: SHA256(concealer).toString()
    })
      .then(res => {
        // console.log(res)
        if (res.data === true) {
          this.props.history.push("/landing");
          // alert("Success")
        } else {
          alert("Please register or use the correct username and password");
        }
      })
      .catch(err => console.log(err));
  };

  //modal logic to pop up and dismiss
  toggle() {
    this.setState({
      modal: !this.state.modal,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: ""
    });
  }

  render() {
    return (
      <div className="loginBox">
        <Card body outline color="primary">
          <CardTitle className="text-center title">CAST YOUR VOTE!</CardTitle>
          <CardText className="text-center subtitle">
            Let your voice be heard!
          </CardText>
          <LoginForm
            toggle={this.toggle}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            email={this.state.email}
            password={this.state.password}
          />
          <Registration
            modal={this.state.modal}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            cpassword={this.state.cpassword}
            toggle={this.toggle}
            handleFormRegister={this.handleFormRegister}
            handleInputChange={this.handleInputChange}
            handleConfirmPass={this.handleConfirmPass}
            showWarning={this.state.showWarning}
          />
        </Card>
      </div>
    );
  }
}

export default Login;
