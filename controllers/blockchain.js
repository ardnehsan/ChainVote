const db = require("../models/blockChain2");

//methods for BlockChain

module.exports = {
  findAll: function(req, res){
    db.BlockChain
    .find(req.query)
    .sort({date: -1})
    .then(dbBlockChain => res.json(dbBlockChain))
    .catch(err => res.status(422).json(err));
  }
};
