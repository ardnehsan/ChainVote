const db = require("../models");

//Defining methods for BlockChain
module.exports = {
<<<<<<< HEAD
  findAll: function(req, res){
    db.BlockChain
    .find(req.query)
    .sort({date: -1})
    .then(dbVoteChainBlockChain => res.json(dbVoteChainBlockChain))
    .catch(err => res.status(422).json(err));
=======
  findAll: function(req, res) {
    db.BlockChain
      .find(req.query)
      .sort({date: -1})
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
>>>>>>> e5030e039f810fd948a7e701c8672564bfda8eb0
  },
  create: function(req, res) {
    const blockChain = {
      index: req.body.index,
      data: req.body.data,
      previousHash: req.body.previousHash,
      hash: req.body.hash
    };
    db.BlockChain
      .create(blockChain)
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
  }
<<<<<<< HEAD
  
=======
>>>>>>> e5030e039f810fd948a7e701c8672564bfda8eb0
};
