const router = require("express").Router();
const blockChainRoutes = require("./blockChain");
const voterRoutes = require("./voter");

// Blockchain routes
router.use("/blockChain", blockChainRoutes);

// Voter routes
router.use("/voter", voterRoutes);

module.exports = router;