const db = require("../models");

//Defining methods for VoteChain.Voter
module.exports = {
  findAll: function(req, res){
    db.VoteChain.Voter
    .find(req.query)
    .sort({date: -1})
    .then(dbVoteChainVoter => res.json(dbVoteChainVoter))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const voter = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      VRN: req.body.VRN,
      isRegistered: req.body.isRegistered
    };
    db.VoteChain.Voter
      .create(voter)
      .then(dbVoteChainVoter => res.json(dbVoteChainVoter))
      .catch(err => res.status(422).json(err));
  }
};