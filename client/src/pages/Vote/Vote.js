import React, { Component } from "react";
import {Button,Jumbotron } from 'reactstrap';
import Header from '../../components/Header';
import API from "../../utils/API";
// import {
//   Nav,
//   Navbar,
//   NavbarBrand,
//   NavItem,
//   NavLink
// } from 'reactstrap';

//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID


import { Link } from 'react-router-dom';


class Vote extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      voter: "Nash",
      value: "Chainvote"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

    state = {
    voter: "",
    vote: "",
    total: []
    };

//need to name select input bar
// add to state object
// give an initial value

  getVotes = () =>{
    API.getBlockChain()
    .then(res =>
      this.setState({
        total: res.data
      })
    )
    .catch(err => console.log(err));
   };


   handleInputChange = event =>{
     this.setState({value: event.target.value});
   };


   handleFormSubmit = event => {
    alert('You chose: ' + this.state.value + ' as your favorite project');
   
    event.preventDefault();
    API.saveBlockChain({
      voter: "Nash",
      vote: this.state.value})
        .then(res => this.getVotes())
        .catch(err => console.log(err));
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
          <select value={this.state.value} name="vote" onChange={this.handleInputChange}>
            <option value="Chainvote">Chain Vote</option>
            <option value="Chores">Chores</option>
            <option value="Eatneat">Eat Neat</option>
            <option value="Helloworld">Hello World</option>
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
