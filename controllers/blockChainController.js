const db = require("../models");

//Defining methods for BlockChain
module.exports = {
  findAll: function(req, res){
    db.BlockChain
    .find(req.query)
    .sort({date: -1})
    .then(dbBlockChain => res.json(dbBlockChain))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const blockChain = {
      index: req.body.index,
      timestamp: req.body.timestamp,
      data: req.body.data,
      previousHash: req.body.previousHash,
      hash: req.body.hash
    };
    db.BlockChain
      .create(blockChain)
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
  }
};