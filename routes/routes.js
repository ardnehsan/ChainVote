// API Routes
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
<<<<<<< HEAD
  app.get("/api/Registry/:firstName&:lastName", function (req, res) {
=======
  app.get("/api/Registry/:firstName&:lastName", function(req, res) {
>>>>>>> 8669537ed632a82f622ae479064d23ac1faf8b85
    db.Voter.findAll({
      where: {
        firstName: req.params.firstName,
        lastName: req.params.lastName
      }
<<<<<<< HEAD
    }).then(function (regVoter) {
      res.json(regVoter);
    });
  });
};


// ROUTE TO HELP WITH REACT AND REDUX TO KNOW WHEN A USER IS LOGED IN WHAT TO DISPLAY ============
// app.get('/api/current_user', (req, res) => {
//   res.send(req.user);
// });
=======
    }).then(function(regVoter) {
      res.json(regVoter);
    });
  });

};
>>>>>>> 8669537ed632a82f622ae479064d23ac1faf8b85
