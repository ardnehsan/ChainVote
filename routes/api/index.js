const router = require("express").Router();
const blockChainRoutes = require("./blockChain");
const voterRoutes = require("./voter");

// BlockChain routes
router.use("/blockChain", blockChainRoutes);

router.use("/voter", voterRoutes);

module.exports = router;