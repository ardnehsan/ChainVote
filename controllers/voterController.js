const db = require("../models");

//Defining methods for Voter
module.exports = {
  login: function (req, res) {
    console.log(req.query);
    console.log("email param: " + req.params.email);
    console.log("password param: " + req.params.password);

    let password = "";
    let dbPassword = "";

    // let password = makeHash(req.body.password);

    db.Voter
      .find({ email: req.params.email })
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));

    // let dbPassword = makeHash();

    if (password === dbPassword) {
      let voter = {
        email: req.params.email,
        password: password
      };
      db.Voter
        .find(voter)
        .then(dbVoter => res.json(dbVoter))
        .catch(err => res.status(422).json(err));
    };
  },
  findByName: function(req, res) {
    db.Voter
      .find({ firstName: req.params.firstName, lastName: req.params.lastName })
      .then(dbVoter => res.json(dbVoter))
      .catch(err => res.status(422).json(err));
  },
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
