const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema ({
  votes: {type: Number, required: true},
  timestamp: {type: Date, default: Date.now, required: true},
  title: {type: String, require: true}
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;