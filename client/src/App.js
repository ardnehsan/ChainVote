import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// IMPORT COMPONENTS ==========================
import Header from "./components/Header";
import Footer from "./components/Footer";

// IMPORT SESSIONS ============================
import Session from "./Session";

const App = () => {
  return (
    <div className="container">
      <Session UAuthEmail={this.UAuthEmail} />
    </div>
  );
};

export default App;