import React from 'react';
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from "./pages/Login";
import Nav from "./components/Nav";
//inporting diffferent pages 

import Landing from "./pages/Landing";
import History from "./pages/History";


const styles = {
    button: {
        background: "red"
    }
};


const App = () => {
    return (
        <div className="container">
            {/* REACT COMPONENT */}
            <BrowserRouter>
                {/* COLLECTION OF ROUTES */}
                <div>
                    <Header />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/campaing" component={CampaingNew} />
                    <Route exact path="/vote" component={Vote} />
                    <Route exact path="/campaing/report" component={Report} />
                    <Route exact path="/history" component={History} />
                </div>
            </BrowserRouter>
        
          

        </div>
      
    );
};

export default App;