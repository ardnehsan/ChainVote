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
  getVotes = () =>{
    API.getBlockchain({
      vote: this.state.vote
    })
    .then(res =>
      this.setState({
        vote: res.data
      })
    )
    .catch(err => console.log(err));
   };
   
   handleFormSubmit = event => {
    event.preventDefault();
    this.vote();
   };

render() {
  return(
    
        <div>
       
        <h3 className="text-center">ELECTION </h3>
        <ListGroup>
        
          <ListGroupItem className="text-center" tag="button" action>Donald Trump</ListGroupItem>
          <ListGroupItem className="text-center" tag="button" action>Hillary Clinton</ListGroupItem>
        </ListGroup>
          <Button color="primary" size="lg"  block><Link to="/campaign" eventName="onTouchTap">Submit</Link></Button>

        </div>


        )
    }
  }

export default Vote;
