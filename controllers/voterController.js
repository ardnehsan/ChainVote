const db = require("../models");
const SHA256 = require('crypto-js/sha256');
//Defining methods for Voter
module.exports = {
  login: function (req, res) {
    let email = req.query.email;
    let qpass = req.query.password;
<<<<<<< HEAD
    // let password = makeHash(req.body.password);

// <<<<<<< HEAD
// =======
//     db.Voter
//       .findOne({email : email})
//       .then(dbVoter => {
//           let voter = dbVoter;
//           const vpass = SHA256(voter.password).toString();
//
//         if (vpass === qpass) {
//           console.log('password good!')
//           return res.json(true);
//         };
//         return res.json(false);
//
//         //bdea3eb189822ec26fb752c97e3c2b50fd87326af90d8ca01c5bf67d7b8d1a67
//         })
//       .catch(err => res.status(422).json(err));
// >>>>>>> 0b80add7cff91b398bf9e6b175a86194a08fbeb9
=======
 
    db.Voter
      .findOne({email : email})
      .then(dbVoter => {
          let voter = dbVoter;
          const vpass = SHA256(voter.password).toString();
         
        if (vpass === qpass) {
          // console.log('password good!')
          return res.json(dbVoter);
        };
        return res.json(false);

        })
      .catch(err => res.status(422).json(err));
  },
  checkVoter: function (req, res) {
    // console.log(req.query);
    let email = req.query.email;
    // // let lastName = req.query.lastName;
>>>>>>> b6ec159de3a3cc6ae235dabbaa7e36e5e1cc6b93

    db.Voter
      .findOne({
        email: email
      })
      .then(dbVoter => {
        console.log(dbVoter);
        // if (dbVoter === null) {
        //   return false;
        // } else {
          return res.json(dbVoter);
        // }
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
<<<<<<< HEAD
        console.log(dbVoter);
        if (dbVoter === null) {
=======
        // console.log(dbVoter);
        if (dbVoter === null) { 
>>>>>>> b6ec159de3a3cc6ae235dabbaa7e36e5e1cc6b93
          return false;
        } else {
          return res.json(dbVoter);
        }
      })
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
  }
};

//add users to Voter Table in votechain DB.

// db.Voter.insert({"firstName": "Lysnandie", "lastName": "Jacques", "email": "LJacques@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "David", "lastName": "Morales", "email": "dmorales@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Matthew", "lastName": "Lloyd", "email": "MLloyd@gmail.com", "password": "tester", "isRegistered": true})
// db.Voter.insert({"firstName": "Michael", "lastName": "Nguyen", "email": "MNguyen@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Hau", "lastName": "Tran", "email": "HTran@gmail.com", "password": "", "isRegistered": true})
// db.Voter.insert({"firstName": "Nash", "lastName": "Fowsar", "email": "NFowsar@gmail.com", "password": "", "isRegistered": true})
