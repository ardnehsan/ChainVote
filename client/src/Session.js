import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route, Switch } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS ========================
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
import API from "./utils/API";
import "./App.css"

const UAuthEmail = localStorage.getItem("UAuthE");
const UAuthLogger = JSON.parse(localStorage.getItem("UAuthL"));
const LogCheck = () => {
    if (UAuthLogger === true) {
        return true;
    } else {
        return false;
    }
};

// // console.log(UAuthE);
// console.log(UAuthEmail);
// console.log(UAuthLogger);
const Logger = LogCheck();
// const Voted = VoteCheck();

// console.log(Logger);


export default class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: Logger,
            hasVoted: true,
            UserFName: "",
            UserEmail: "",
        };
    }


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
        // this.VoteCheck();
        // this.state.hasVoted = VoteCheck();
        console.log(this.state.hasVoted);
        setTimeout(() => { console.log(this.state.hasVoted); }, 5000);

    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        const UAuthRoot = this.state.isLoggedIn ?
            (<Route exact path="/" component={Landing} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />) :
            (<Route exact path="/" component={Login} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />);
       
        const UAuthLogin = this.state.isLoggedIn ?
            (<Route exact path="/login" component={Landing} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />) :
            (<Route exact path="/login" component={Login} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />);

        const UAuthLanding = this.state.isLoggedIn ? 
            (<Route exact path="/landing" component={Landing} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />) : 
            (<Route exact path="/landing" component={Login} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />);

        const UAuthVote = this.state.isLoggedIn ? 
            (<Route exact path="/vote" component={Vote} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />) : 
            (<Route exact path="/vote" component={Login} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />);
        
        const UAuthAbout = this.state.isLoggedIn ?
            (<Route exact path="/about" component={About} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />) :
            (<Route exact path="/about" component={Login} email={this.state.email} isLoggedIn={this.state.isLoggedIn} />);

        return (
            <div className="container">
                {/* REACT COMPONENT */}
                <BrowserRouter>
                    {/* COLLECTION OF ROUTES */}
                    <div>
                        <Header />
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
                        {/* <Footer /> */}
                    </div>
                </BrowserRouter>
            </div>
    )};

};
