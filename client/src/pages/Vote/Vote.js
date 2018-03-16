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
    API.getBlockchain({
      voter: this.state.voter,
      vote: this.state.vote
    })
    .then(res =>
      this.setState({
        voter: res.data,
        vote: res.data
      })
    )
    .catch(err => console.log(err));
   };



   handleFormSubmit = event => {
    event.preventDefault();
    this.getVotes();
    alert('You chose: ' + this.state.value + 'as your favorite project');
   };

   VoteSave = id => {
    const vote = this.state.votes.find(vote => vote._id === id);
    API.saveBlockChain(vote).then(res => this.getVotes());
  };

render() {
  return(
        <div>
        <h3 className="text-center">ELECTION </h3>
        <form onSubmit={this.handleFormSubmit}>
        <label>
         Pick your favorite project: 
          <select value={this.state.value} onChange={this.VoteSave}>
            <option value="Eatneat">EatNeat</option>
            <option value="Chainvote">ChainVote</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>


        )
    }
  }

export default Vote;
