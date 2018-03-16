import React, { Component } from "react";
import API from "../../utils/API";

class Landing extends Component {
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
    );
  }
}

export default Landing;