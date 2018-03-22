import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Jumbotron } from "reactstrap";
import {Bar} from 'react-chartjs-2';
import VoteTable from "../../components/VoteTable";
import "./Report.css";
const SHA256 = require("crypto-js/sha256");


//ISSUES
// NEED TO RETRIEVE VALUES FROM THE BLOCKCHAIN
// COUNT THE VOTES FOR EACH PROJECT THEN PASS INTO THE GRAPH
// NEED TO INTEGRATE THE SESSION ID

class Report extends Component {
 
  state = {
    votes: []
  };

  componentDidMount(){
    this.getBlockChain();
  }


  getBlockChain = () => {
    API.getBlockChain()
    .then(res => {
      console.log(res.data)
      this.setState({
        votes: res.data
      })
    })
    .catch(err => console.log(err));
    };
  
  
    
render() {
  const data = {
    labels: ['Chain Vote', 'Chores', 'Eat Neat', 'Hello World', 'Snippets', 'Vibez'],
    datasets: [
      {
        label: 'Number of Votes',
        backgroundColor: 'red',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [1, 1, 1, 1,1, 1]
      }
    ]
  };

  const Keys = this.props.isLoggedIn ?
    (<div className="Reporter">
      <p>Hello {this.props.UserFName}! 
      Your Voter public key is: <strong>{SHA256(this.props.UPrivateKey).toString()}</strong></p>
      {/* <h3>Your private key is {this.props.UPrivateKey}</h3> */}
    </div>
    ) : (
      <div>
      </div>);

  return (
      <div>
        <Jumbotron className="text-center">
          <h1>
            Election Results
          </h1>
        </Jumbotron>
      <h2>
        {Keys}
      </h2>
        {/* <Bar
          data={data}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        /> */}

       <div>
        {this.state.votes.length ? (
            <p>
          {this.state.votes.map(ballot =>{
            return (
            <VoteTable
              vote={ballot.vote}
              voter={ballot.voter}
              id={ballot.hash}
              pH={ballot.previousHash}
            />
            );
          })}
          </p>
        ): (<h1>You currently do not have any votes stored.</h1>)}
        </div>
        </div>
        );
      }
    }

export default Report;