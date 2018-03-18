import React, { Component } from "react";
<<<<<<< HEAD
// <<<<<<< HEAD
// import Jumbotron from "../../components/Jumbotron";
// import Panel from "../../components/Panel";
// import Form from "../../components/Form";
// import Article from "../../components/Article";
// import Footer from "../../components/Footer";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List } from "../../components/List";
// =======
=======
import { Link, Router } from 'react-router-dom';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Jumbotron,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
import API from "../../utils/API";
import History from "../History";


class Landing extends Component {
<<<<<<< HEAD
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
    message: "Search For Articles To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          articles: res.data,
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

// <<<<<<< HEAD
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.getArticles();
//   };
//
//   handleArticleSave = id => {
//     const article = this.state.articles.find(article => article._id === id);
//     API.saveArticle(article).then(res => this.getArticles());
//   };


//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.getArticles();
//   };

//   handleArticleSave = id => {
//     const article = this.state.articles.find(article => article._id === id);
//     API.saveArticle(article).then(res => this.getArticles());
//   };

  render() {
    return (
      <div>
        <h1>Landing</h1>
        </div>

=======
  render() {
    return (
      <div className="container">
        {/* REACT COMPONENT */}
          <div>
              {/* router links */}
              <Link to="/Report"><Button>History</Button></Link>
              <Link to="/vote"><Button>Vote</Button></Link>
              <h2>ChainVote is an application that allow users to create campaigns, and vote on other campaigns.
              ChainVote will help cut down time that it takes to count votes.</h2>
          </div>
      </div>
>>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
    );
  }

};

export default Landing;
