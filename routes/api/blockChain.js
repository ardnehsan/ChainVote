const router = require ("express").Router();
const blockChainController = require ("../../controllers/blockChainController");

// Matches with "/api/blockChain"
router.route("/")
	.get(blockChainController.findAll)
	.post(blockChainController.create);

router.route("/genesis")
	.post(blockChainController.createGen);

module.exports = router;
