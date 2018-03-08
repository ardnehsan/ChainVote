// API Routes
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const LANDING = '/';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const PASSWORD_FORGET = '/pw-forget';
var db = require("../models");

module.exports = function (app) {

  app.post("/api/Registry", function (req, res) {
    var newVoter = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      VRN: req.body.VRN
    };
    db.Registry.create(newVoter).then(function (regVoter) {
      res.json(regVoter);
    });
  });

  //query on frontend api/Registry/?firstName='Bob'&lastName='Bobby'
  app.get("/api/Registry/:firstName&:lastName", function(req, res) {
    db.Voter.findAll({
      where: {
        firstName: req.params.firstName,
        lastName: req.params.lastName
      }
    }).then(function(regVoter) {
      res.json(regVoter);
    });
  });
  
};