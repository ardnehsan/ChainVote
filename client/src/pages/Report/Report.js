import React, { Component } from "react";
import API from "../../utils/API";

import {Bar} from 'react-chartjs-2';
import VoteTable from "../../components/VoteTable";


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
  
  return(
    
        <div>
          
         <h2 className="text-center">Election Results</h2>
         <h4>count</h4>
=======
const data = {
  labels: ["Project1", "Project2", "Project3", "Project4", "Project5"],
  datasets: [
    {
      label: "Number of Votes",
      backgroundColor: "red",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [6, 5, 8, 1, 7, 5, 4]
    }
  ]
};

class Report extends Component {
  state = {
    vote: ""
  };

  getCount = () => {
    API.getBlockchain()
      .then(res =>
        this.setState({
          vote: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Election Results</h2>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />

       <div>
        {this.state.votes.length ? (
            <p>
          {this.state.votes.map(ballot =>{
            return (
            <VoteTable
              vote={ballot.vote}
              id={ballot._id}
            />
            );
          })}
          </p>
        ): (<h1>Nothing</h1>)}
        </div>
        </div>
        );
    }
      </div>
    );

  }
}

export default Report;
