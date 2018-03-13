// ==================================================================
// App.js IS RESPOSIBLE FOR THE INITIAL VIEW LAYER SETUP ============
// ==================================================================

import React from 'react';
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import Registration from './components/Registration/Registration';

import { Card, Button, CardTitle, CardText } from 'reactstrap';

// import Home from "./pages/Home";
// import Nav from "./components/Nav";
import Header from './components/Header/Header';
const Landing = () => <h2>Landing</h2>
const Login = () => <h2>Login</h2>
const CampaignNew = () => <h2>CampaignNew</h2>
const Vote = () => <h2>Vote</h2>
const Report = () => <h2>Report</h2>
const About = () => <h2>About</h2>

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
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/campaign" component={CampaignNew} />
                    <Route exact path="/vote" component={Vote} />
                    <Route exact path="/campaign/report" component={Report} />

    
                </div>
            </BrowserRouter>
        
            <div>
            <Card body outline color="secondary">

        <CardTitle className="text-center">Cast your Vote!</CardTitle>
        <CardText className="text-center">Let your voice be heard!</CardText>
         <LoginForm/>
        <Registration/>
             </Card>   
        </div>

        </div>
      
    );
};

export default App;