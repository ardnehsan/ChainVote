import React from "react";
import "../../utils/API";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../Landing";
import { Table } from 'reactstrap';
import styles from "./History.css";


export default class History extends React.Component {
  render() {
    return (
      <Table bordered>
        <thead className="historyTable">
          <tr>
            <th>Ballots</th>
            <th>Previous Block</th>
            <th>Voter</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody className="historyTable">
          <tr>
            <th scope="row">32he2e2he</th>
            <td>0</td>
            <td>david</td>
            <td>nash</td>
          </tr>
          <tr>
            <th scope="row">2e3b2kh2bk3e</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">23k2b32kh3b2hhk</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
