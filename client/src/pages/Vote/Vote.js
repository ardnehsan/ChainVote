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
//imports hashing function
const SHA256 = require("crypto-js/sha256");

const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
const UAuthVote = JSON.parse(localStorage.getItem("UAuthV"));

// function WarningBanner(props) {
//   if (this.state.value === "VoteChain") {
//     return (
//       <Card
//         body
//         inverse
//         style={{ backgroundColor: "#171f32", borderColor: "#FF611D" }}
//       >
//         <CardImg top src={VoteBK} width="80%" height="80%" />
//         <CardBody className="cards">
//           <CardTitle>Vote Chain</CardTitle>
//           <CardSubtitle>Block Chain Voting System</CardSubtitle>
//           <div>
//             <Button value="VoteChain" onClick={this.handleInputChange}>
//               SELECT
//                   </Button>
//           </div>
//         </CardBody>
//       </Card>

//     );
//   }
//   return null;
// }

const VoteCheck = () => {
  // console.log(UAuthEmail);
  let hasVoted = true;
  API.getVoter({ email: UAuthEmail })
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
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      voter: "",
      cursor: 0,
      value: "",
      vote: "",
      total: [],
      hasVoted: this.props.UhasVoted
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    const { cursor, total } = this.state
    // arrow up/down button should select next/previous list element
    if (e.key === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.key === 40 && cursor < total.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
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
    // this.setState({ hasVoted: true });
    // this.props.handleInputChange2(true);
    // const authV = true;
    // localStorage.setItem("UAuthV", authV);

    // console.log(this.state.total);
    // this.setState({ hasVoted : true })
    // const authV = true;
    event.preventDefault();

    console.log(this.props.UPrivateKey)
    let UPrivKey = this.props.UPrivateKey;
    let UPubKey = SHA256(this.props.UPrivateKey).toString();
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

    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
    // this.props.handleInputChange2(true);
    // setTimeout(() => { console.log(this.props.UhasVoted); }, 5000);  
    
    // setTimeout(() => { window.location.reload(); }, 500);
    setTimeout(() => { window.location = "/Report"; }, 500);
  };
  ComponentDidMount() {}

  render() {
    setTimeout(() => { console.log(this.props); }, 5000);
    const { cursor } = this.state;
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

    const VotePage = UhasVoted ? (
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
                <CardTitle>VoteChain</CardTitle>
                <CardSubtitle>Block Chain Voting System</CardSubtitle>
                <div>
                  <Button value="VoteChain" onClick={this.handleInputChange}>
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
                <Button value="Chores" onClick={this.handleInputChange}>
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
                <CardTitle>EatNeat</CardTitle>
                <CardSubtitle>Eat healthy and delicious. Eat</CardSubtitle>
                <Button value="EatNeat" onClick={this.handleInputChange}>
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
                <Button value="HelloWorld" onClick={this.handleInputChange}>
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
                <Button value="Snippets" onClick={this.handleInputChange}>
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
                <CardTitle value="Vibez">Vibez</CardTitle>
                <CardSubtitle>
                  Make friends with the same music taste.
                </CardSubtitle>
                <Button value="Vibez" onClick={this.handleInputChange}>
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
                <Button value="Gamer Guru" onClick={this.handleInputChange}>
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
            block type="submit"
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
