import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Header from '../../components/Header';
import { ListGroup, ListGroupItem } from 'reactstrap';
import API from "../../utils/API";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';


class Vote extends Component {
  
    state = {
    voter: "",
    vote: ""
    };



  getVotes = () =>{
    API.getBlockchain()
    .then(res =>
      this.setState({
        voter: res.data,
        vote: res.data
      })
    )
    .catch(err => console.log(err));
   };


   handleInputChange = event =>{
     const {name,value} = event.target;
     this.setState({
       [name]: value
     });
   };


   handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.vote && this.state.voter){
    API.saveBlockChain({
      vote: this.state.vote,
      voter: this.state.voter})
        .then(res => this.getVotes())
        .catch(err => console.log(err));
    }

    alert('You chose: ' + this.state.value + ' as your favorite project');
   };

render() {
  return(
        <div>
        <h3 className="text-center">ELECTION </h3>
        <form onSubmit={this.handleFormSubmit}>
        <label>
         Pick your favorite project: 
          <select value={this.state.value} onChange={this.handleInputChange}>
            <option value="Eatneat">EatNeat</option>
            <option value="Chainvote">ChainVote</option>
            <option value="Chores">Chores</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>


        )
    }
  }

export default Vote;
