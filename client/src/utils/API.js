import axios from "axios";

export default {
  // Get voter by firstname/lastname
  getVoter: function(params) {
    return axios.get("/api/voter/register/" + params);
  },
  // Save voter info
  saveVoter: function(params) {
    return axios.post("/api/voter/register/" + params);
  },
  // Gets voter by email/password
  login: function(params) {
  	return axios.get("/api/voter/login" + params);
  },
  // Get block chain
  getBlockChain: function() {
    return axios.get("/api/blockChain");
  },
  // Save voter
  saveBlockChain: function() {
    return axios.post("/api/blockChain");
  }
};