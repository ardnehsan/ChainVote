import axios from 'axios';
import filterParams from "./filterParams";


export default {
  login: function (params) {
    console.log(params);
    return axios.get("api/voter/login", { params: filterParams(params) });
  },
  // Get voter by firstname/lastname
  checkRegistry: function(params) {
    console.log("route works");
    return axios.get("/api/voter/register/" + params);
  },
  // Save voter info
  register: function(params) {
    return axios.post("/api/voter/register/" + params);
  },
  // Get block chain
  getBlockChain: function() {
    return axios.get("/api/blockChain");
  },
  // Save voter
  saveBlockChain: function(vote) {
    console.log(vote);
    return axios.post("/api/blockChain", vote);
  }
};