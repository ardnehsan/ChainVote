const router = require ("express").Router();
const voterController = require ("../../controllers/voterController");

// Matches with "/api/voter"
router.route("/")
	.get(voterController.findAll)
	.post(voterController.create);

module.exports = router;