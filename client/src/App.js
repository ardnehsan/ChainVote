import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS ========================
import Header from "./components/Header";
// import Footer from "./components/Footer";

// IMPORT PAGES ====================================
import Session from "./Session";
// import Vote from "./pages/Vote";
// import History from "./pages/History";
// import Report from "./pages/Report";
// import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Four04 from "./pages/Four04";
// import "./App.css"


const App = () => {

  const UAuthEmail = localStorage.getItem("UAuthE");
  const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));

  const LogCheck = () => {
    if (UAuthLogger) {
      return true}
      else {
        return false
      };
  };
  // let state = false;
  // const isLoggedIn = localStorage.getItem("UAuth");
  // const logger = JSON.parse(isLoggedIn);
  // if (logger === null) {
  //   state = false;
  // } else {state = true};
  // console.log(logger);


  // const UAuthLanding = state ? (<Route exact path="/landing" component={Landing} />
  // ) : (<Route exact path="/landing" component={Login} />);

  // const UAuthVote = state ? (<Route exact path="/vote" component={Vote} />
  // ) : (<Route exact path="/vote" component={Login} />);
  LogCheck();
  console.log(LogCheck());
  return (
  
    <div className="container">
      
      {/* REACT COMPONENT */}
      {/* <BrowserRouter> */}
        {/* COLLECTION OF ROUTES */}
        {/* <div> */}
          {/* <Header /> */}
        <Session logger={this.logger} />
          {/* <Switch> */}
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/campaign" component={Campaign} /> */}
            {/* {UAuthVote} */}
            {/* <Route exact path="/vote" component={Vote} /> */}
            {/* <Route exact path="/report" component={Report} /> */}
            {/* <Route exact path="/history" component={History} /> */}
            {/* {UAuthLanding} */}
            {/* <Route exact path="/landing" component={Landing} /> */}
            {/* <Route exact path="/about" component={About} /> */}
            {/* <Route component={Four04} /> */}
          {/* </Switch> */}
          {/* <Footer /> */}
        {/* </div> */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;