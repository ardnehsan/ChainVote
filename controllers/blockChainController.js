const db = require("../models");

//Defining methods for BlockChain
module.exports = {
  findAll: function(req, res) {
    db.BlockChain
      .find(req.query)
      .sort({date: -1})
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    const blockChain = {
      index: req.body.index,
      voter: req.body.voter,
      vote: req.body.vote,
      previousHash: req.body.previousHash,
      hash: req.body.hash
    };
    db.BlockChain
      .create(blockChain)
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
  }
};
