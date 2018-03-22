import React from "react";
import {Table} from 'reactstrap';
//hash
//previoushash
//voter
//vote
const VoteTable = ({vote, id}) =>(
    <Table bordered>
    <thead>
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
        
      </tr>
     
    </tbody>
  </Table>
);

export default VoteTable;