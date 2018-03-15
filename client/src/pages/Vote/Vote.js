import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Header from '../../components/Header';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
import { Alert } from 'reactstrap';

import { Link } from 'react-router-dom';

class Vote extends Component {

state = {

  id: [],
  selections: ""
}

getList(){
  const selections = ["Hillary", "Donald"];
}


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
