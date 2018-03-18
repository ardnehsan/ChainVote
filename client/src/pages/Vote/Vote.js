import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";
import Header from "../../components/Header";
import API from "../../utils/API";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  FormGroup,
  Label,
  Input
} from "reactstrap";

//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID

import { Link } from "react-router-dom";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Chainvote" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  state = {
    voter: "Nash",
    vote: "",
    total: []
  };

  //need to name select input bar
  // add to state object
  // give an initial value

  getVotes = () => {
    API.getBlockChain()
      .then(res =>
        this.setState({
          total: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleFormSubmit = event => {
    alert("You chose: " + this.state.value + " as your favorite project");
    console.log(this.state.value);
    event.preventDefault();
    API.saveBlockChain({
      voter: this.state.voter,
      vote: this.state.value
    })
      .then(res => this.getVotes())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className="text-center">Chris' Class</h2>
        </Jumbotron>
        <form className="text-center" onSubmit={this.handleFormSubmit}>
          {/* <label>
            Pick your favorite project:
            <select
              value={this.state.value}
              name="vote"
              onChange={this.handleInputChange}
            >
              <option value="Chainvote">Chain Vote</option>
              <option value="Chores">Chores</option>
              <option value="Eatneat">Eat Neat</option>
              <option value="Eatneat">Hello World</option>
              <option value="Eatneat">Snippets</option>
              <option value="Helloworld">Vibez</option>
            </select>
          </label> */}
          <FormGroup>
            <CardDeck>
              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody className="cards">
                  <CardTitle>Chain Vote</CardTitle>
                  <CardSubtitle>Block Chain Voting System</CardSubtitle>
                  <CardText>
                    A voting application built with block chain technology at
                    it's core.
                  </CardText>
                  <Button>Vote</Button>
                </CardBody>
              </Card>

              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />

                <CardBody  className="cards">
                  <CardTitle>Chores</CardTitle>
                  <CardSubtitle>
                    Need a way to track your chores? This is the application to
                    help you{" "}
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>

              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody  className="cards">
                  <CardTitle>Eat Neat</CardTitle>
                  <CardSubtitle>
                    Eat Neat! Eat healthy and delicious with the app that provokes taste buds.
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. 
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </CardDeck>
            {/* ending of card */}
            {/*  ========================================================================================================== */}
            {/*  ========================================================================================================== */}
            <CardDeck className="bottomDeck">
            <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg classname="cards"
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody  className="cards">
                  <CardTitle>Hello World</CardTitle>
                  <CardSubtitle>Travel to interesting places!</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>

              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody  className="cards">
                  <CardTitle>Snippets</CardTitle>
                  <CardSubtitle>Find the tutorial that you need</CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>

              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody  className="cards">
                  <CardTitle>Vibez</CardTitle>
                  <CardSubtitle>Make friends with the same music taste</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. 
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </FormGroup>
          <div className="text-center">
            <Button color="danger" size="lg" input type="submit">
              Submit{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Vote;