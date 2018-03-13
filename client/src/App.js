import React from 'react';
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route } from 'react-router-dom';
<<<<<<< HEAD

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';

=======
//inporting diffferent pages 
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
>>>>>>> e5030e039f810fd948a7e701c8672564bfda8eb0
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Home from "./pages/Home";
<<<<<<< HEAD
import Nav from "./components/Nav";


const Landing = () => <h2>Landing</h2>
=======
import Landing from "./pages/Landing";
import History from "./pages/History";
// import Nav from "./components/Nav";
import Header from './components/Header';
>>>>>>> e5030e039f810fd948a7e701c8672564bfda8eb0
const Login = () => <h2>Login</h2>
const CampaingNew = () => <h2>CampaingNew</h2>
const Vote = () => <h2>Vote</h2>
const Report = () => <h2>Report</h2>

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
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/campaing" component={CampaingNew} />
                    <Route exact path="/vote" component={Vote} />
                    <Route exact path="/campaing/report" component={Report} />
<<<<<<< HEAD


=======
                    <Route exact path="/history" component={History} />
>>>>>>> e5030e039f810fd948a7e701c8672564bfda8eb0
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
