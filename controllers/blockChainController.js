const db = require("../models");
//imports hashing function
const SHA256 = require('crypto-js/sha256');


//Defining methods for BlockChain
module.exports = {
  findAll: function(req, res) {
    db.BlockChain
      .find()
      .sort({timestamp: -1})
      .then(dbBlockChain => res.json(dbBlockChain))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const timestamp = Date.now();
    const voter = req.body.voter;
    const vote = req.body.vote;

    db.BlockChain
      .findOne(req.query)
      .sort({_id: -1})
      .then(dbBlockChain => {
        const previousHash = dbBlockChain.hash
        //Individual block class and constructor to be placed on chain
        class Block {
          //the different values & datatypes placed in each block

          constructor(timestamp, vote, voter, previousHash = '') {
            this.timestamp = timestamp;
            this.vote = vote;
            this.voter = voter;
            this.previousHash = previousHash;
            this.hash = this.calculateHash();
          };

          //the method that compiles all a given block's information into a stringified hash
          calculateHash() {
            return SHA256(this.timestamp + this.vote + this.voter + this.previousHash).toString();
          };
        };
        db.BlockChain
          .create(new Block(timestamp, vote, voter, previousHash))
           .then(dbBlockChain1 => {
             console.log(dbBlockChain1);
            return res.json(dbBlockChain1);
          })
           .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));

  },
  createGen: function (req, res) {
    console.log(req.body);
    const timestamp = Date.now();
    const voter = req.body.voter;
    const vote = req.body.vote;
    const data = {
      voter: voter,
      vote: vote
    }

    //Individual block class and constructor to be placed on chain
      class Block {
        //the different values & datatypes placed in each block
        constructor(timestamp, data, previousHash = '') {
          this.timestamp = timestamp;
          this.data = data;
          this.previousHash = previousHash;
          this.hash = this.calculateHash();
        };
        //the method that compiles all a given block's information into a stringified hash
        calculateHash() {
          return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
        };
      };
    db.BlockChain
      .create(new Block(timestamp, "Genesis Block", "Genesis Block"))
      .then(dbBlockChain1 => res.json(dbBlockChain1))
      .catch(err => res.status(422).json(err));
  }
};
