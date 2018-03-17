const router = require("express").Router();
const voterController = require("../../controllers/voterController");

// Matches with "/api/voter/register/firstname&lastname"
// router
// 	.route("/register/:firstName&:lastName")
// 	.get(voterController.findByName)
// 	.post(voterController.update);

//               /api/voter/login/?email=MLloyd@gmail.com&password=tester	
// Matches with "/api/voter/login/email&password"
router
	.route("login/:email&:password")
	.get(voterController.login)

module.exports = router;