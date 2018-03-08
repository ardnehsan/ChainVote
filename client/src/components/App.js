import React from 'react';
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Landing = () => <h2>Landing</h2>
const Login = () => <h2>Login</h2>
const CampaingNew = () => <h2>CampaingNew</h2>
const Vote = () => <h2>Vote</h2>
const Report = () => <h2>Report</h2>

const App = () => {
    return (
        <div>
            {/* REACT COMPONENT */}
            <BrowserRouter>
                {/* COLLECTION OF ROUTES */}
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/campaing" component={CampaingNew} />
                    <Route exact path="/vote" component={Vote} />
                    <Route exact path="/campaing/report" component={Report} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;