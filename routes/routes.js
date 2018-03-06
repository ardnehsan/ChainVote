// API Routes
var db = require("../models");

module.exports = function (app) {

  app.post("/api/Registry", function (req, res) {
    var initObj = {
      firstName: voter.firstName,
      lastName: voter.lastName,
      VRN: voter.VRN,
    };
    db.Registry.create(initObj).then(function (regVoter) {
      res.json(regVoter);
    });
  });
}