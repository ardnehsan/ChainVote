import React from 'react';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
    </div>
  </Router>
=======
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
>>>>>>> 2a4db10f8a865f4d71378cc3b41ae20ce450e8c8

export default App;