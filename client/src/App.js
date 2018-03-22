import React from "react";
import { Route, Switch } from "react-router-dom";

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