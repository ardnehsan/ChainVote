const router = require ("express").Router();
const voterController = require ("../../controllers/voterController");

// Matches with "/api/voter/firstname&lastname"
router.route("/:firstName&:lastName")
	.get(voterController.findByName)
	.post(voterController.update);

module.exports = router;