const router = require ("express").Router();
const blockChainController = require ("../../controllers/blockChainController");

// Matches with "/api/blockchain"
router.route("/")
.get(blockChainController.findAll);

module.exports = router;
