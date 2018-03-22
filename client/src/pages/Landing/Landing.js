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
//     const {
//       isLoggedIn,
//       UPrivateKey,
//       UserEmail,
//       UserFName,
//       UserLName,
//       UisRegistered,
//       UhasVoted
//     } = this.props;
// console.log(this.props);
  return (

      <div className="container">

        <div className="content">
          <h2>ChainVote is a voting system application with Block Chain Technology at is core.</h2>
          <h2>It allows users to vote on a campaign or create their own.</h2>
          <h2>ChainVote is SECURE, FAST, AND ACURATE!</h2>
        </div>


        <div>
          <Link to="/Report">
            <Button size="lg" 
              style={{ 
                backgroundColor: '#171f32', 
                borderColor: '#FF611D'
              }}>Report
            </Button>
          </Link>
          <Link to="/vote">
            <Button size="lg" 
              style={{ 
                backgroundColor: '#171f32', 
                borderColor: '#FF611D'
              }}>Vote
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
