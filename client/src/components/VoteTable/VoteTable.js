import React from "react";
import { Table } from 'reactstrap';
import "./Report.css";
//hash
//previoushash
//voter
//vote
const VoteTable = ({key, vote, id, pH }) => (
  <Table bordered>
    <thead className="historyTable">
      <tr>
        <th>#</th>
        <th>Key</th>
        <th>Project</th>
        <th>Hash</th>
        <th>Previous Hash</th>


      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>{key}</td>
        <td>{vote}</td>
        <td>{id}</td>
        <td>{pH}</td>

      </tr>

    </tbody>
  </Table>
);

export default VoteTable;