const db = require("../models/");

//Defining methods for BlockChain
module.exports = {
  findAll: function(req, res){
    db.BlockChain
    .find(req.query)
    .sort({date: -1})
    .then(dbBlockChain => res.json(dbBlockChain))
    .catch(err => res.status(422).json(err));
  }
  create: function(req, res){
    db.BlockChain
    .create(blockchain)
    .then(dbBlockChain => res.json(dbBlockChain))
    .catch(err => res.status(422).json(err));
  }
};
