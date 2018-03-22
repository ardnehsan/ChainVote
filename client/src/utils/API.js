import axios from 'axios';
import filterParams from "./filterParams";


export default {
  login: function (params) {
    // console.log(params);
    return axios.get("/api/voter/login", { params: filterParams(params) });
  },
  getVoter: function (params) {
    return axios.get("api/voter/", {params});
  },
  // Get voter by firstname/lastname
  checkRegistry: function (params) {
    // console.log(params);
    return axios.get("api/voter/register", { params: filterParams(params) });
  },
  // Save voter info
  register: function(params) {
    return axios.put("/api/voter/register", { params: filterParams(params) });
  },

  hasVoted: function (params) {
    return axios.put("/api/voter/", {params});
  },
  // Get block chain
  getBlockChain: function() {
    return axios.get("/api/blockChain");
  },
  // Save voter
  saveBlockChain: function(vote) {
    return axios.post("/api/blockChain", vote);
  }
};