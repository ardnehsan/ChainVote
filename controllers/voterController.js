const db = require("../models");
const SHA256 = require('crypto-js/sha256');

//Defining methods for Voter
module.exports = {
  login: function (req, res) {
    let email = req.query.email;
    let qpassword = req.query.password;

    db.Voter
      .findOne({email: email})
      .then(dbVoter => {

        })
      .catch(err => res.status(422).json(err));

  },
  findByName: function(req, res) {
    db.Voter
      .find({ firstName: req.body.firstName, lastName: req.body.lastName })
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
  //FOR TESTING PURPOSES; DELETE AFTER=======================================================
  findAll: function (req, res) {
    db.Voter
      .find({})
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
  createNew: function (req, res) {
    console.log(req.body);
    const citizen = {
      email : req.body.email,
      password : req.body.password,
      firstName : req.body.firstName,
      lastName : req.body.lastName
    };

    db.Voter
      .create(citizen)
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
  //========================================================================================
  update: function(req, res) {
    let vpassword = SHA256(req.body.password).toString();
    let voter = {
      email: req.body.email,
      password: vpassword,
      isRegistered: true
    };
    db.Voter
      .findOneAndUpdate({ firstName: req.body.firstName, lastName: req.body.lastName }, voter)
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  }
};

//add users to Voter Table in votechain DB.

// db.Voter.insert({"firstName": "Lysandnie", "lastName": "Jacques", "email": "LJacques@gmail.com", "password": "", isRegistered": "false"})
// db.Voter.insert({"firstName": "David", "lastName": "Morales", "email": "dmorales@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Matthew", "lastName": "Lloyd", "email": "MLloyd@gmail.com", "password": "tester", "isRegistered": true})
// db.Voter.insert({"firstName": "Michael", "lastName": "Nguyen", "email": "MNguyen@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Hau", "lastName": "Tran", "email": "HTran@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Nash", "lastName": "Fowsar", "email": "NFowsar@gmail.com", "password": "", "isRegistered": true})
