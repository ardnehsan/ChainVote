import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route, Switch } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS ========================
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT PAGES ====================================
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import History from "./pages/History";
import Report from "./pages/Report";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Four04 from "./pages/Four04";
import API from "./utils/API";
import "./App.css"


const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
// const UAuthVote = JSON.parse(localStorage.getItem("UAuthV"));


const LogCheck = () => {
    if (UAuthLogger) {
        return true;
    } else {
        return false;
    }
};

const Logger = LogCheck();


export default class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: Logger,
            UPrivateKey: "",
            UserEmail: "",
            UserFName: "",
            UserLName: "",
            UisRegistered: false,
            UhasVoted: true
        };
    }
    isPrevUser = () => {
        if (UAuthEmail) {
            API.getVoter({ email: UAuthEmail })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        UPrivateKey: res.data.userPrivateKey,
                        UserEmail: res.data.email,
                        UserFName: res.data.firstName,
                        UserLName: res.data.lastName,
                        UisRegistered: res.data.isRegistered,
                        UhasVoted: res.data.hasVoted,
                    });
                    return res.data;
                })
                .catch(err => console.log(err));

            // return true;
        } else {
            return false;
        }
    };

    VoteCheck = () => {
        API.getVoter({ email: UAuthEmail })
            .then(res => {
                // console.log(res.data);
                this.setState({
                    hasVoted: res.data.hasVoted
                });
            })
            .catch(err => console.log(err));
        // setTimeout(() => { console.log(hasVoted); }, 1000);

    };

    componentDidMount() {
        this.isPrevUser();
        // this.state.hasVoted = VoteCheck();
        console.log(this.state.UhasVoted);
        setTimeout(() => { console.log(this.state); }, 5000);

    };

    handleInputChange2 = (value) => {
        // const { value } = event.target;
        this.setState({
            hasVoted: value
        });
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        const UAuthRoot = this.state.isLoggedIn ?
            (<Route exact path="/"
                render={() =>
                    <Landing
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />) : 
            (<Route exact path="/"
                render={() =>
                    <Login
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />);
        const UAuthLogin = this.state.isLoggedIn ?
            (<Route exact path="/login"
                render={() =>
                    <Landing
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />) : 
            (<Route exact path="/login"
                render={() =>
                    <Login
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />);
        const UAuthLanding = this.state.isLoggedIn ? 
            (<Route exact path="/landing"
                render={() =>
                    <Landing
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />) : 
            (<Route exact path="/landing"
                render={() =>
                    <Login
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />);

        const UAuthVote = this.state.isLoggedIn ? 
            (<Route exact path="/vote" 
                render={() => 
                    <Vote 
                    handleInputChange2={this.handleInputChange2}  
                    isLoggedIn={this.state.isLoggedIn}
                    UserEmail={this.state.UserEmail}
                    UserFName={this.state.UserFName}
                    UserLName={this.state.UserLName}
                    UisRegistered={this.state.UisRegistered}
                    UhasVoted={this.state.UhasVoted}
                    UPrivateKey={this.state.UPrivateKey}
                    />}
              />) : 
            (<Route exact path="/vote" 
                render={() =>
                    // Change to Login
                    <Vote
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
             />);
        
        const UAuthAbout = this.state.isLoggedIn ?
            (<Route exact path="/about"
                render={() =>
                    <About
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />) : 
            (<Route exact path="/about"
                render={() =>
                    <About
                        handleInputChange2={this.handleInputChange2}
                        isLoggedIn={this.state.isLoggedIn}
                        UserEmail={this.state.UserEmail}
                        UserFName={this.state.UserFName}
                        UserLName={this.state.UserLName}
                        UisRegistered={this.state.UisRegistered}
                        UhasVoted={this.state.UhasVoted}
                        UPrivateKey={this.state.UPrivateKey}
                    />}
            />);


        return (
            <div className="container">
                {/* REACT COMPONENT */}
                <BrowserRouter>
                    {/* COLLECTION OF ROUTES */}
                    <div>
                        <Header isLoggedIn={this.state.isLoggedIn} />
                        <Switch>
                            {UAuthRoot}
                            {UAuthLogin}
                            {/* <Route exact path="/login" component={Login} handleInputChange={this.handleInputChange} /> */}
                            {/* <Route exact path="/campaign" component={Campaign} /> */}
                            {UAuthVote}
                            {/* <Route exact path="/vote" component={Vote} /> */}
                            {UAuthLanding}
                            {/* <Route exact path="/landing" component={Landing} /> */}
                            <Route exact path="/report" component={Report} />
                            <Route exact path="/history" component={History} />
                            <Route exact path="/about" component={About} />
                            <Route component={Four04} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
    )};

};
