import React from "react";
// BrowserRouter = IT TELLS REACT ROUTER HOW TO BEHAVE. IT LOOKS AT THE CURRENT URL AND CHANGE THE SET OF COMPONENTS VISIBLE ON THE SCREEN.
// Route = IS A REACT COMPONENT THAT IS USED TO SETUP A RULE BETWEEN A ROUTE AND A SET OF COMPONENTS VISIBLE ON THE SCREEN.
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import Header from './components/Header';
// import Nav from "./components/Nav";

// IMPORT PAGES ====================================
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import History from "./pages/History";
// import Campaign from "./pages/Campaign";
import Report from "./pages/Report";
import Landing from "./pages/Landing";
import Four04 from "./pages/Four04";

// const styles = {
//     button: {
//         background: "red"
//     }
// };



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
							<Route component={Four04} />
						</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;