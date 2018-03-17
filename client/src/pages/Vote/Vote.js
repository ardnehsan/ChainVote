import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Jumbotron } from 'reactstrap';
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

//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID


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
        <Jumbotron>
        <h2 className="text-center">ELECTION </h2>
        </Jumbotron>
        <form className="text-center" onSubmit={this.handleFormSubmit}>
        <label>
         Pick your favorite project:    
          <select value={this.state.value} onChange={this.handleInputChange}>
            <option value="Eatneat">EatNeat</option>
            <option value="Chainvote">ChainVote</option>
            <option value="Chores">Chores</option>
          </select>
        </label>
        <div className="text-center">
        <Button color="danger" size="lg" input type="submit">Submit </Button>
        </div>
      </form>
     
        </div>


        )
    }
  }

export default Vote;
