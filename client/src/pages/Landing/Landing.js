import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';
import "../../utils/API";
import "../History";
import "./Landing.css"


class Landing extends Component {

  render() {
    const {
      email,
      isLoggedIn
    } = this.props;
    console.log(this.props.email);
    console.log(this.props.isLoggedIn);
  return (
      <div className="container">

        <div className="content">
          <h2>VoteChain is a voting system application with Block Chain Technology at is core.</h2>
          <h2>It allows users to vote on a campaign or create their own.</h2>
          <h2>VoteChain is SECURE, FAST, AND ACURATE!</h2>
          <br />
          <h2>Click on Vote to start voting on a campaign.</h2>
          <h2>Click on Report to see the election's results as a block chain.</h2>
        </div>


        <div>
          <Link to="/Report"><Button size="lg" style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>Report</Button></Link>
          <Link to="/vote"><Button size="lg" style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>Vote</Button></Link>
        </div>
      </div>
    );
  }
}
export default Landing;
