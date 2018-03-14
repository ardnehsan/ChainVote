const db = require("../models");

//Defining methods for Voter
module.exports = {
<<<<<<< HEAD

  findAll: function(req, res){
    db.Voter
    .find(req.query)
    .sort({date: -1})
    .then(dbVoteChainVoter => res.json(dbVoteChainVoter))
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
=======
  findByName: function(req, res) {
>>>>>>> c22fb030964181c6fe758d3b0769ead944726906
    db.Voter
      .find({ firstName: req.params.firstName, lastName: req.params.lastName })
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    let voter = {
      email: req.body.email,
      password: req.body.password,
<<<<<<< HEAD
      isRegistered: req.body.isRegistered
=======
      isRegistered: true
>>>>>>> c22fb030964181c6fe758d3b0769ead944726906
    };
    db.Voter
      .findOneAndUpdate({ firstName: req.params.firstName, lastName: req.params.lastName }, voter)
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  }
};

//add users to Voter Table in votechain DB.

// db.Voter.insert({"firstName": "Lysandnie", "lastName": "Jacques", "email": "LJacques@gmail.com", isRegistered": "false"})
// db.Voter.insert({"firstName": "David", "lastName": "Morales", "email": "dmorales@gmail.com", "VRN": "00001", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Matthew", "lastName": "LLoyd", "email": "Mlloyd@gmail.com", "VRN": "00002", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Michael", "lastName": "Nguyen", "email": "MNguyen@gmail.com", "VRN": "00003", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Hau", "lastName": "Tran", "email": "HTran@gmail.com", "VRN": "00004", "isRegistered": "true"})
// db.Voter.insert({"firstName": "Nash", "lastName": "Fowsar", "email": "NFowsar@gmail.com", "VRN": "00005", "isRegistered": "true"})
