const router = require("express").Router();
const voterController = require("../../controllers/voterController");


//Matches with "/api/voter/"
//MADE FOR TESTING; DELETE AFTER=================================
router
	.route("/")
	.get(voterController.checkVoter);
//===============================================================

	
// Matches with "/api/voter/register/firstname&lastname"
router
	.route("/register")
	.get(voterController.checkRegistry)
	.put(voterController.Register)
	.post(voterController.createNew)

//               /api/voter/login/?email=MLloyd@gmail.com&password=tester	
// Matches with "/api/voter/login/email&password"
router
	.route("/login")
	.get(voterController.login)

module.exports = router;