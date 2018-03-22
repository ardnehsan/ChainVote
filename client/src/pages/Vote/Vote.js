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
  FormGroup
} from "reactstrap";
import "./vote.css";
import VoteBK from "../../img/VoteBK.jpg";
import ChoresBK from "../../img/ChoresBK.jpg";
import EatBK from "../../img/EatBK.jpg";
import WorldBK from "../../img/WorldBK.jpg";
import SnippetsBK from "../../img/SnippetsBK.jpg";
import VibezBK from "../../img/VibezBK.jpg";
import GameBK from "../../img/GameBK.jpg";

const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
const UAuthVote = JSON.parse(localStorage.getItem("UAuthV"));

const VoteCheck = () => {
  console.log(UAuthEmail);
  let hasVoted = true;
  API.getVoter({ email: UAuthEmail })
    .then(res => {
      console.log(res.data.hasVoted);
      hasVoted = res.data.hasVoted;
    })
    .catch(err => console.log(err));

  if (hasVoted === true) {
    return true;
  } else {
    return false;
  }
};
const Logger = VoteCheck();
//ISSUES
// STILL CANNOT CAPTURE THE VALUE INPUT MADE BY THE USER
// NEED TO INTEGRATE THE SESSION ID

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voter: "",
      value: "",
      total: [],
      hasVoted: false
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
        console.log(res.data);
        this.setState({
          total: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  handleFormSubmit = event => {
    alert("You chose: " + this.state.value + " as your favorite project");
    this.setState({ hasVoted: true });
    this.props.handleInputChange2(true);
    const authV = true;
    localStorage.setItem("UAuthV", authV);

    console.log(this.state.total);
    event.preventDefault();
    API.saveBlockChain({
      voter: "Nash",
      vote: this.state.value
    })
      .then(res => this.getVotes())
      .catch(err => console.log(err));
    // this.props.history.push("/Report")

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  ComponentDidMount() {}

  render() {
    console.log(this.props);
    setTimeout(() => {
      console.log(this.props);
    }, 5000);

    const voted = this.state.hasVoted;

    const VotePage = UAuthVote ? (
      <div>
        <Jumbotron>
          <h1 className="text-center">
            Uh oh! It looks like you've already voted!
          </h1>
        </Jumbotron>
      </div>
    ) : (
      <div>
        <Jumbotron>
          <h1 className="text-center">PROJECT'S ELECTION</h1>
        </Jumbotron>

        <FormGroup>
          <CardDeck className="bottomDeck">
            {/* FIRST CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={VoteBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle>Vote Chain</CardTitle>
                <CardSubtitle>Block Chain Voting System</CardSubtitle>
                <div>
                  <Button value="votechain" onClick={this.handleInputChange}>
                    SELECT
                  </Button>
                </div>
              </CardBody>
            </Card>

            {/* SECOND CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={ChoresBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle>Chores</CardTitle>
                <CardSubtitle>Organize you todo list</CardSubtitle>
                <Button value="chores" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>

            {/* THIRD CANDIDATE =======================================================*/}
            {/* =======================================================================*/}

            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={EatBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle>Eat Neat</CardTitle>
                <CardSubtitle>Eat healthy and delicious. Eat</CardSubtitle>
                <Button value="eat" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>
          </CardDeck>

          {/*  ========================================================================================================== */}
          {/*  ========================================================================================================== */}

          <CardDeck className="bottomDeck">
            {/* FOURTH CANDIDATE =======================================================*/}
            {/* ========================================================================*/}
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={WorldBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle value="helloworld">Hello World</CardTitle>
                <CardSubtitle>Travel to interesting places!</CardSubtitle>
                <Button value="helloworld" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>

            {/* FIFTH CANDIDATE =======================================================*/}
            {/* =======================================================================*/}
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={SnippetsBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle value="snippets">Snippets</CardTitle>
                <CardSubtitle>Search & Post Tutorials</CardSubtitle>
                <Button value="snippets" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>

            {/* SIXTH CANDIDATE =======================================================*/}
            {/* =======================================================================*/}
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={VibezBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle value="vibez">Vibez</CardTitle>
                <CardSubtitle>
                  Make friends with the same music taste.
                </CardSubtitle>
                <Button value="vibez" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>
          </CardDeck>

          {/* SEVENTH CANDIDATE =======================================================*/}
          {/* =======================================================================*/}
          <CardDeck>
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg width="80%" height="80%" />
            </Card>

            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg top src={GameBK} width="80%" height="80%" />
              <CardBody className="cards">
                <CardTitle value="gamer">Gamer Guru</CardTitle>
                <CardSubtitle>Stream live video games.</CardSubtitle>
                <Button value="gamer" onClick={this.handleInputChange}>
                  SELECT
                </Button>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
            >
              <CardImg width="80%" height="80%" />
            </Card>
          </CardDeck>
        </FormGroup>

        {/* SUBMIT YOUR VOTE BUTTON ===============================================*/}
        {/* =======================================================================*/}
        <div className="text-center">
          <Button
            color="danger"
            size="lg"
            block
            input
            type="submit"
            onClick={this.handleFormSubmit}
          >
            SUBMIT{" "}
          </Button>
        </div>
      </div>
    );

    return <div>{VotePage}</div>;
  }
}

export default Vote;
