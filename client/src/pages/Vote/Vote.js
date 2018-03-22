
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
//imports hashing function
const SHA256 = require("crypto-js/sha256");

const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
const UAuthVote = JSON.parse(localStorage.getItem("UAuthV"));

const VoteCheck = () => {
  // console.log(UAuthEmail);
  let hasVoted = true;
  API.getVoter({email: UAuthEmail})
    .then(res => {
      // console.log(res.data.hasVoted);
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
      vote: "",
      total: [],
      hasVoted: this.props.UhasVoted
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //need to name select input bar
  // add to state object
  // give an initial value
// 
  // getVotes = () => {
  //   API.getBlockChain()
  //     .then(res => {
  //       // console.log(res.data)
  //       this.setState({
  //         total: res.data
  //       })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
    setTimeout(() => { console.log(this.state.value); }, 500);
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleFormSubmit = event => {
    alert("You chose: " + this.state.value + " as your favorite project");
    // this.setState({ hasVoted : true })
    // const authV = true;
    event.preventDefault();

    console.log(this.props.UPrivateKey)
    let UPrivKey = this.props.UPrivateKey;
    let UPubKey = SHA256(this.props.PrivateKey).toString();
//Creates new block to store User's Vote========================    
    API.saveBlockChain({
      voter: UPubKey,
      vote: this.state.value
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
//Now Update the User's Vote Status=============================      
    API.hasVoted({
      UPrivKey
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
    // this.props.history.push("/Report")
    // this.props.handleInputChange2(true);
    // setTimeout(() => { console.log(this.props.UhasVoted); }, 5000);  
    
    // setTimeout(() => { window.location.reload(); }, 500);
    setTimeout(() => { window.location = "/Report"; }, 500);
  };
  ComponentDidMount() {
  };  

  render() {
    const {
      isLoggedIn,
      UPrivateKey,
      UserEmail,
      UserFName,
      UserLName,
      UisRegistered,
      UhasVoted
    } = this.props;
    // console.log(this.props);
    // setTimeout(() => { console.log(this.props); }, 5000);


    const voted = this.state.hasVoted;

    const VotePage = UhasVoted ?
      (
        <div>
          <Jumbotron>
            <h1 className="text-center">Uh oh! It looks like you've already voted!</h1>
          </Jumbotron >
        </div >
      ) : (
        <div>
          <Jumbotron>
            <h1 className="text-center">Projects' Election</h1>
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
                  <CardTitle>VoteChain</CardTitle>
                  <CardSubtitle>Block Chain Voting System</CardSubtitle>
                  <Button value="VoteChain" onClick={this.handleInputChange}>Vote</Button>
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
            <Button color="danger" size="lg" block type="submit" onClick={this.handleFormSubmit}>
              Submit{" "}
            </Button>
          </div>
        </div>
      );

    return (<div>
              {VotePage}
            </div>
    );

  }
}

export default Vote;