import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";
import "../../components/Header";
import API from "../../utils/API";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  FormGroup,
} from "reactstrap";
import "./vote.css"

//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID


class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voter: "Nash",
      value: "chainvote",
      total: [],
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
      .then(res => {
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
      vote: this.state.value
    })
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

            {/* FIRST CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
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
                <Button value="chainvote" onClick={this.handleInputChange}>Vote</Button>
              </CardBody>
            </Card>


            {/* SECOND CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card body inverse style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Chores</CardTitle>
                <CardSubtitle>Organize you todo list</CardSubtitle>
                <Button value="chores" onClick={this.handleInputChange}>Vote</Button>
              </CardBody>
            </Card>


            {/* THIRD CANDIDATE =======================================================*/}
            {/* =======================================================================*/}
            <Card body inverse style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Eat Neat</CardTitle>
                <CardSubtitle>Eat healthy and delicious. Eat Neat!</CardSubtitle>
                <Button value="eatneat" onClick={this.handleInputChange}>Vote</Button>
              </CardBody>
            </Card>
          </CardDeck>

          {/*  ========================================================================================================== */}
          {/*  ========================================================================================================== */}

          <CardDeck className="bottomDeck">
            {/* FOURTH CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card body inverse style={{ backgroundColor: '#171f32', borderColor: '#FF611D' }}>
              <CardImg className="cards"
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody className="cards">
                <CardTitle value="helloworld">Hello World</CardTitle>
                <CardSubtitle>Travel to interesting places!</CardSubtitle>
                <Button value="helloworld" onClick={this.handleInputChange}>Vote</Button>
              </CardBody>
            </Card>


            {/* FIFTH CANDIDATE =======================================================*/}
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
              <CardBody className="cards">
                <CardTitle value="snippets">Snippets</CardTitle>
                <CardSubtitle>Search & Post Tutorials</CardSubtitle>
                <Button value="snippets" onClick={this.handleInputChange}>Vote</Button>
              </CardBody>
            </Card>


            {/* SIXTH CANDIDATE =======================================================*/}
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
              <CardBody className="cards">
                <CardTitle value="vibez">Vibez</CardTitle>
                <CardSubtitle>Make friends with the same music taste.</CardSubtitle>
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