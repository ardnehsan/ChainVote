import React, { Component } from "react";
import API from "../../utils/API";

import {Bar} from 'react-chartjs-2';


//ISSUES
// NEED TO RETRIEVE VALUES FROM THE BLOCKCHAIN
// COUNT THE VOTES FOR EACH PROJECT THEN PASS INTO THE GRAPH
// NEED TO INTEGRATE THE SESSION ID



const data = {
  labels: ['Project1', 'Project2', 'Project3', 'Project4', 'Project5'],
  datasets: [
    {
      label: 'Number of Votes',
      backgroundColor: 'red',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [6, 5, 8, 1, 7, 5, 4]
    }
  ]
};


class Report extends Component {

  state = {
  vote: ""
  };

  getCount = () =>{
    API.getBlockchain()
    .then(res =>
      this.setState({
        vote: res.data
      })
    )
    .catch(err => console.log(err));
    };
    
render() {
  return(
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
        </div>
        )
    }
  }

export default Report;
