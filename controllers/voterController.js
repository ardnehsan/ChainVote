const db = require("../models");
const SHA256 = require('crypto-js/sha256');
//Defining methods for Voter
module.exports = {
  login: function (req, res) {
    console.log(req.query);
    // console.log("email param: " + req.query.email);
    // console.log("password param: " + req.query.password);
    let email = req.query.email;
    let qpass = req.query.password;
    // let password = makeHash(req.body.password);

    db.Voter
      .findOne({email : email})
      .then(dbVoter => {
          // console.log("login password: " + qpass);
          // console.log("Voter response: " + dbVoter);
          let voter = dbVoter;
          const vpass = SHA256(voter.password).toString();
          // console.log(qpass);

        if (vpass === qpass) {
          console.log('password good!')
          // let voter = {
          //   email: req.params.email,
          //   password: password
          // };
          // db.Voter
          //   .find(voter)
          //   .then(dbVoter => res.json(dbVoter))
          //   .catch(err => res.status(422).json(err));
        };

        //bdea3eb189822ec26fb752c97e3c2b50fd87326af90d8ca01c5bf67d7b8d1a67
        

        })
      .catch(err => res.status(422).json(err));

    // let dbPassword = makeHash();
    // console.log(res.json(dbVoter));

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
    let password = "";

    // let password = makeHash(req.body.password);
    let voter = {
      email: req.body.email,
      password: password,
      isRegistered: true
    };
    db.Voter
      .findOneAndUpdate({ firstName: req.params.firstName, lastName: req.params.lastName }, voter)
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
