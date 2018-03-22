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
<<<<<<< HEAD
  getVoter: function(){
    return axios.get("api/voter");
=======

  hasVoted: function (params) {
    return axios.put("/api/voter/", {params});
>>>>>>> 69ca63960ae805e3cbdfc22ba15d953301eee1b6
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