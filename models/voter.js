const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const voterSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  isRegistered: {type: Boolean, require: true}
});

const Voter = mongoose.model("Voter", voterSchema);

module.exports = Voter;

// db.VoteChain.insert({"index": "1", "data":"yes","previousHash": "33388", "hash": "333"});
