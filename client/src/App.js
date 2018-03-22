import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from "./components/Nav";

=======
// import { BrowserRouter, Route, Switch } from "react-router-dom";

<<<<<<< HEAD
// IMPORT GLOBAL COMPONENTS ========================
import Header from "./components/Header";
// import Footer from "./components/Footer";
>>>>>>> b6ec159de3a3cc6ae235dabbaa7e36e5e1cc6b93

// IMPORT PAGES ====================================
=======
// IMPORT Session ====================================
>>>>>>> 93b851958a615d3eec81f9346c70a935d97cb5f9
import Session from "./Session";



const App = () => {

  // const UAuthEmail = localStorage.getItem("UAuthE");
  // const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));

  // const LogCheck = () => {
  //   if (UAuthLogger) {
  //     return true
  //   } else {
  //       return false
  //     };
  // };

  // LogCheck();
  // console.log(LogCheck());
  return (
    <div className="container">
        <Session UAuthEmail={this.UAuthEmail} />
    </div>
  );
};

export default App;
