const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const blockChainSchema = new Schema ({
  index: {type: Number, required: true},
  timestamp: {type: Date, default: Date.now, required: true},
  data: {type: String, require: true},
  previousHash: {type: String, require: true},
  hash: {type: String, require: true}

});

const BlockChain = mongoose.model("BlockChain", blockChainSchema);

module.exports = BlockChain;
//
// db.VoteChain.insert({"index": "1", "data":"yes","previousHash": "33388", "hash": "333"});
