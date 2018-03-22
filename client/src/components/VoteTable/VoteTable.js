import React from "react";
import { Table } from 'reactstrap';
import "./VoteTable.css";
//hash
//previoushash
//voter
//vote
const VoteTable = ({ voter, vote, id, pH }) => (
  <Table bordered responsive>
    <thead className="historyTable">
      <tr>
        <th>Vote</th>
        <th>Voter</th>
        <th>Current Block</th>
        <th>Previous Block</th>
      </tr>
    </thead>
    <tbody className="TableData">
      <tr>
        <th scope="row">{vote}</th>
        {/* <td>{vote}</td> */}
        <td>{voter}</td>
        <td>{id}</td>
        <td>{pH}</td>

      </tr>

    </tbody>
  </Table>
);

export default VoteTable;