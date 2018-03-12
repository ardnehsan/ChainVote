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

//add users to Voter Table in votechain DB.

// db.Voter.insert({"firstName": "Lysandnie", "lastName": "Jacques", "email": "LJacques@gmail.com", "VRN": "00000", "isRegistered": "true"})
// db.Voter.insert({"firstName": "David", "lastName": "Morales", "email": "dmorales@gmail.com", "VRN": "00001", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Matthew", "lastName": "LLoyd", "email": "Mlloyd@gmail.com", "VRN": "00002", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Michael", "lastName": "Nguyen", "email": "MNguyen@gmail.com", "VRN": "00003", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Hau", "lastName": "Tran", "email": "HTran@gmail.com", "VRN": "00004", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Nash", "lastName": "Fowsar", "email": "NFowsar@gmail.com", "VRN": "00005", "isRegistered": "true"})
