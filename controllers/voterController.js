
const db = require("../models");
const SHA256 = require('crypto-js/sha256');

//Defining methods for Voter
module.exports = {
  login: function (req, res) {
    let email = req.query.email;
    let qpass = req.query.password;
    db.Voter
      .findOne({email : email})
      .then(dbVoter => {
        if (dbVoter === null) {
          return res.json("Unregistered");
        }
          const vpass = SHA256(dbVoter.password).toString();
          if (vpass === qpass) {
            // console.log('password good!')
            let VoterObj = {
              email : dbVoter.email,
              firstName : dbVoter.firstName,
              lastName : dbVoter.lastName,
              hasVoted : dbVoter.hasVoted
            };
            return res.json(VoterObj);
          }
          else {
            return res.json(false);
          };
  
        })
      .catch(err => res.json(false));
  },
  getVoter: function (req, res) {
    let email = req.query.email;
    db.Voter
      .findOne({
        email: email
      })
      .then(dbVoter => {
        let VoterObj = {
          userPrivateKey: dbVoter._id,
          email: dbVoter.email,
          firstName: dbVoter.firstName,
          lastName: dbVoter.lastName,
          hasVoted: dbVoter.hasVoted,
          isRegistered: dbVoter.isRegistered
        }
          return res.json(VoterObj);
      })
      .catch(err => res.status(422).json(err));
  },
  checkRegistry: function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    db.Voter
      .findOne({
        firstName: firstName,
        lastName : lastName
      })
      .then(dbVoter => {
        // console.log(dbVoter);
          if (dbVoter === null) {
            return false;
          } else {
            return res.json(dbVoter);
          }
      })
      .catch(err => res.json(null));
  },
  //FOR TESTING PURPOSES; DELETE AFTER=======================================================
  findAll: function (req, res) {
    db.Voter
      .find({})
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
  createNew: function (req, res) {
    // console.log(req.body);
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

  Register: function(req, res) {
    const vfirstName = req.body.params.firstName;
    const vlastName = req.body.params.lastName;
    const vemail = req.body.params.email;
    const vpassword = req.body.params.password;

    const voter = {
      email: vemail,
      password: vpassword,
      isRegistered: true
    };
    db.Voter
      .findOneAndUpdate({ firstName: vfirstName, lastName: vlastName }, voter)
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
    hasVoted: function (req, res) {
      console.log(req.body.params.UPrivKey);
    const VPrivKey = req.body.params.UPrivKey;
    const voter = {
      hasVoted: true
    };
    db.Voter
      .findOneAndUpdate({ _id: VPrivKey }, {hasVoted: true})
      .then(dbVoter => {
        console.log(dbVoter);
        res.json(dbVoter)})
      .catch(err => res.status(422).json(err));
  }
};
