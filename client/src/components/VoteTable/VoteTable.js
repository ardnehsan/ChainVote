import React from "react";
import { Table } from 'reactstrap';
import "./Report.css";
//hash
//previoushash
//voter
//vote
const VoteTable = ({ vote, id, pH }) => (
  <Table bordered>
    <thead className="historyTable">
      <tr>
        <th>#</th>
        <th>Project</th>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>{vote}</td>
        <td>{id}</td>
        <td>{pH}</td>

      </tr>

    </tbody>
  </Table>
);

export default VoteTable;