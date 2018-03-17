import React, { Component } from "react";
import API from "../../utils/API";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../Landing";

class History extends Component {
//create a function where it'll grab data from previous voting data
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Campaign</th>
          </tr>
        </thead>
        <tbody>History</tbody>
      </table>
    );
    return (
      <Route exact path="/landing" component={Landing} />
    )
  }
}
export default History;