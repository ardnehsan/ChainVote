import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import Registration from '../../components/Registration';


class Report extends Component {
render() {
  return(
          <div>
          <Card body outline color="secondary">
        <CardTitle className="text-center">Cast your Vote!</CardTitle>
        <CardText className="text-center">Let your voice be heard!</CardText>
        <LoginForm/>
        <Registration/>
          </Card>   
        </div>
        )
    }
  }

export default Report;
