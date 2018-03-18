import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";

// IMPORT PAGES ====================================
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import History from "./pages/History";
import Report from "./pages/Report";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Four04 from "./pages/Four04";
import styles from "./App.css"

const App = () => {
  return (
    <div className="container">
      {/* REACT COMPONENT */}
      <BrowserRouter>
        {/* COLLECTION OF ROUTES */}
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/campaign" component={Campaign} /> */}
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/history" component={History} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route component={Four04} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;