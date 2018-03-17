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
    let blockChain = {
      voter: req.body.voter,
      vote: req.body.vote,
      previousHash: "",
      hash: req.body.hash
    };

    db.BlockChain
      .findOne(req.query)
      .sort({_id: -1})
      .then(dbBlockChain => {
        blockChain.previousHash = dbBlockChain.hash;
         db.BlockChain
           .create(blockChain)
           .then(dbBlockChain1 => res.json(dbBlockChain1))
           .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));

  }
};