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
<<<<<<< HEAD
        <th>id</th>
=======
        <th>Hash</th>
        <th>Previous Hash</th>


>>>>>>> 93b851958a615d3eec81f9346c70a935d97cb5f9
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