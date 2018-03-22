import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import LoginForm from "../../components/LoginForm";
import Registration from "../../components/Registration";
import "./login.css";
import API from "../../utils/API";

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
      showWarning: false,
      isRegistered: true,
      passwordMatch: true
    };

    this.toggle = this.toggle.bind(this);
    this.handleConfirmPass = this.handleConfirmPass.bind(this);
  }
  componentDidMount() {
    setTimeout(() => { 
      if (this.props.UserEmail) {
        this.setState({
          email: this.props.UserEmail,
        });
      };
    }, 500);
  };
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
    console.log(this.login());
  };

  login = () => {
    this.setState({
      isRegistered: true,
      passwordMatch: true
    });
    //conceals the password from us
    const concealer = SHA256(this.state.password).toString();
    API.login({
      email: this.state.email,
      //conceals the password from others
      password: SHA256(concealer).toString()
    })
    .then(res => {
      console.log(res.data);
      //Unregistered notification
      if (res.data === "Unregistered") {
        this.setState({
          isRegistered: false,
        });
      //==========================  
      } else {
      //Incorrect Password notification  
        if (res.data === false) {
          this.setState({
            password: "",
            passwordMatch : false
          });
      //============================    
        } else {
          this.setState({
            isRegistered: true,
            passwordMatch: true
          });
          const authE = res.data.email;
          const authL = true;
          this.setState({
            hasVoted: res.data.hasVoted,
          });
          localStorage.setItem("UAuthE", authE.toString());
          localStorage.setItem("UAuthL", authL);
          console.log(this.props);
          this.context.history.push("/landing");
          setTimeout(() => { window.location.reload(); }, 500);
        }
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
      cpassword: "",
      isRegistered: true
    });
  }

  render() {
    const {
      isLoggedIn,
      UserEmail,
      UisRegistered,
      UhasVoted
    } = this.props;



    const isRegistered = this.state.isRegistered ?
      (<div></div>) :
      (<div><CardText className="text-center subtitle">
        Uh Oh! It Looks Like You Are Not Registered!</CardText></div>);
    const passwordMatch = this.state.passwordMatch ?
      (<div></div>) :
      (<div><CardText className="text-center subtitle">
        Incorrect Email or Password!</CardText></div>);
    

    return (
      <div className="loginBox">
        <Card body outline color="#101727">
          <CardTitle className="text-center title">CAST YOUR VOTE!</CardTitle>
          <CardText className="text-center subtitle">
            Let your voice be heard!
          </CardText>
          {isRegistered}
          {passwordMatch}
          <LoginForm
            toggle={this.toggle}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            email={this.state.email}
            password={this.state.password}
            isRegistered={this.state.isRegistered}
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
