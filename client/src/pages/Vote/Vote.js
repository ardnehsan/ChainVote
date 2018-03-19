import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";
import Header from "../../components/Header";
import API from "../../utils/API";
import {
  // Nav,
  // Navbar,
  // NavbarBrand,
  // NavItem,
  // NavLink,
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
import styles from "./vote.css"

class Vote extends Component {
  constructor(props) {
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

    event.preventDefault();
    API.saveBlockChain({
      voter: "Nash",
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
          <FormGroup tag="fieldset" row>
            <CardDeck className="TopDeck">

              {/* FIRST CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  height="100%"
                  margin-left="auto"
                  margin-right="auto"
                />
                <CardBody>
                  <CardTitle>Chain Vote</CardTitle>
                  <CardSubtitle>Block Chain Voting System</CardSubtitle>
                </CardBody>
                <Label check>
                  <Input type="radio" name="radio2" />{' '}
                </Label>
              </Card>


              {/* SECOND CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Chores</CardTitle>
                  <CardSubtitle>
                    Need a way to track your chores? This is the application to
                    help you{" "}
                  </CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                  </Label>
                </CardBody>
              </Card>


              {/* THIRD CANDIDATE =======================================================*/}
              {/* =======================================================================*/}
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Eat Neat</CardTitle>
                  <CardSubtitle>
                    Eat Neat! Eat healthy and delicious with the app that
                    provokes taste buds.
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                  </Label>
                </CardBody>
              </Card>
            </CardDeck>
            {/*  ========================================================================================================== */}
            {/*  ========================================================================================================== */}
            <CardDeck className="bottomDeck">
              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Hello World</CardTitle>
                  <CardSubtitle>Travel to interesting places!</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                  </Label>
                </CardBody>
              </Card>

              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Snippets</CardTitle>
                  <CardSubtitle>Find the tutorial that you need</CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                  </Label>
                </CardBody>
              </Card>

              <Card
                body
                inverse
                style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
              >
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Vibez</CardTitle>
                  <CardSubtitle>
                    Make friends with the same music taste
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                  </Label>
                </CardBody>
              </Card>
            </CardDeck>
          </FormGroup>


          {/* SUBMIT YOUR VOTE BUTTON ===============================================*/}
          {/* =======================================================================*/}
          <div className="text-center">
            <Button color="danger" size="lg" block input type="submit">
              Submit{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Vote;
