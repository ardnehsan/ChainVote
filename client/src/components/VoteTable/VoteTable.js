import React from "react";
import { Table } from 'reactstrap';
import "./VoteTable.css";
//hash
//previoushash
//voter
//vote
<<<<<<< HEAD
const VoteTable = ({key, vote, id, pH }) => (
  <Table bordered>
    <thead className="historyTable">
      <tr>
        <th>#</th>
        <th>Key</th>
        <th>Project</th>
        <th>Hash</th>
        <th>Previous Hash</th>


=======
const VoteTable = ({ voter, vote, id, pH }) => (
  <Table bordered responsive>
    <thead className="historyTable">
      <tr>
        <th>Vote</th>
        <th>Voter</th>
        <th>Current Block</th>
        <th>Previous Block</th>
>>>>>>> 69ca63960ae805e3cbdfc22ba15d953301eee1b6
      </tr>
    </thead>
    <tbody className="TableData">
      <tr>
<<<<<<< HEAD
        <th scope="row"></th>
        <td>{key}</td>
        <td>{vote}</td>
=======
        <th scope="row">{vote}</th>
        {/* <td>{vote}</td> */}
        <td>{voter}</td>
>>>>>>> 69ca63960ae805e3cbdfc22ba15d953301eee1b6
        <td>{id}</td>
        <td>{pH}</td>

      </tr>

    </tbody>
  </Table>
);

export default VoteTable;