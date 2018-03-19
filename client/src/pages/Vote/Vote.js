import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";
import "../../components/Header";
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

// import { Link } from "react-router-dom";
import "./vote.css"

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voter: "Nash",
      value: "chainvote",
      total:[],
      notVoted: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  //need to name select input bar
  // add to state object
  // give an initial value

  getVotes = () => {
    API.getBlockChain()
      .then(res =>{
        console.log(res.data)
        this.setState({
          total: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  handleFormSubmit = event => {
    alert("You chose: " + this.state.value + " as your favorite project");
    console.log(this.state.total);
    event.preventDefault();
    API.saveBlockChain({
      voter: "Nash",
      vote: this.state.value})
        .then(res => this.getVotes())
        .catch(err => console.log(err));
   };


render() {
  
  const voted = this.state.notVoted;

    
    return (

      <div>
        <Jumbotron>
        <h2 className="text-center">Chris' Class</h2>
        </Jumbotron>
        
          <FormGroup>
            <CardDeck>
              <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg
                  top
                  width="100%"
                  height="100%"
                  margin-left="auto"
                  margin-right="auto"
                />
                <CardBody onClick={this.handleInputChange}>
                  <CardTitle>Chain Vote</CardTitle>
                  <CardSubtitle>Block Chain Voting System</CardSubtitle>
                  <CardText>
                    A voting application built with block chain technology at
                    it's core.
                  </CardText>
                  <Button  value="chainvote" >Vote</Button>
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
                  <Button value="chores" onClick={this.handleInputChange}>Vote</Button>
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
                  <Button  value="eatneat" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>
            </CardDeck>
            {/*  ========================================================================================================== */}
            {/*  ========================================================================================================== */}
            <CardDeck className="bottomDeck">
            <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
                <CardImg className="cards"
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody  className="cards">
                  <CardTitle value="helloworld">Hello World</CardTitle>
                  <CardSubtitle>Travel to interesting places!</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Button value="helloworld" onClick={this.handleInputChange}>Vote</Button>
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
                <CardBody  className="cards">
                  <CardTitle value="snippets">Snippets</CardTitle>
                  <CardSubtitle>Find the tutorial that you need</CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button value="snippets" onClick={this.handleInputChange}>Vote</Button>
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
                <CardBody  className="cards">
                  <CardTitle value="vibez">Vibez</CardTitle>
                  <CardSubtitle>Make friends with the same music taste</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Button value="vibez" onClick={this.handleInputChange}>Vote</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </FormGroup>


          {/* SUBMIT YOUR VOTE BUTTON ===============================================*/}
          {/* =======================================================================*/}
          <div className="text-center">
            <Button color="danger" size="lg" block input type="submit" onClick={this.handleFormSubmit}>
              Submit{" "}
            </Button>
          </div>
      </div>
    );
  }
}

export default Vote;
