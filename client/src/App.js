import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// IMPORT Session ====================================
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
