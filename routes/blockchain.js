const router = require ("express").Router();
const blockChainController = require ("../../controllers/blockChainController");

//routes
router.route("/")
.get(articleController.findAll)
.post(blockChainController.create);

//do we need the specific route? We are just trying to grab the whole object right?
//do we even need to post it?
//do we need a route?
//do we need a controllers?

module.exports = router;
