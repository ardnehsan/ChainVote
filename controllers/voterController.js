const db = require("../models");

//Defining methods for Voter
module.exports = {
  findAll: function(req, res){
    db.Voter
    .find(req.query)
    .sort({date: -1})
    .then(dbVoter => res.json(dbVoter))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let voter = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      VRN: req.body.VRN,
      isRegistered: req.body.isRegistered
    };
    db.Voter
      .create(voter)
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  }
};