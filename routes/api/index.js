const router = require("express").Router();
const blockChainRoutes = require("./blockChain");

// BlockChain routes
router.use("/blockChain", blockChainRoutes);

module.exports = router;