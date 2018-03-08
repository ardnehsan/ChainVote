const db = require("../models");

//Defining methods for VoteChain.BlockChain
module.exports = {
  findAll: function(req, res){
    db.VoteChain.BlockChain
    .find(req.query)
    .sort({date: -1})
    .then(dbVoteChainBlockChain => res.json(dbVoteChainBlockChain))
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
    db.VoteChain.BlockChain
      .create(blockChain)
      .then(dbVoteChainBlockChain => res.json(dbVoteChainBlockChain))
      .catch(err => res.status(422).json(err));
  }
  create: function(req, res){
    db.BlockChain
    .create(blockchain)
    .then(dbBlockChain => res.json(dbBlockChain))
    .catch(err => res.status(422).json(err));
  }
};
