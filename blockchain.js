//imports hashing function
const SHA256 = require('crypto-js/sha256');

//Individual block class and constructor to be placed on chain
class Block {
    //the different values & datatypes placed in each block
    constructor (index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    };

    //the method that compiles all a given block's information into a stringified hash
    calculateHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    };
};

//Blockchain class and constructor
class Blockchain {
    constructor () {
        //chain is an array of objects starting with genesisBlock at index:0
        this.chain = [this.createGenBlock()];
    };

    //first block created manually
    createGenBlock() {
        return new Block(0, "01/01/2018", "Genesis Block", "0");
    };

    //retrieving the last block in the chain array
    getLatestBlock() {
        return this.chain[this.chain.length -1];
    };

    //creates a new block, calculates it's hash based on previous block's hash, then pushes to blockchain array
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    };

    //verifies chain's validity by multiple checks
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            //recalculates the hash of the currentBlock to see if any data has been changed
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            };

            //compares the previous block's hash to the current block's 'previousHash' value
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }; 
        };
        return true;
    };
}

//new Blockchain instance
let voterCoin = new Blockchain();

//adding some test blocks
voterCoin.addBlock(new Block(1, "01/02/2018", {vote : 2, voter : "tester"}));
voterCoin.addBlock(new Block(2, "01/03/2018", {vote : 1, voter : "tester2"}));
voterCoin.addBlock(new Block(3, "01/04/2018", {vote : 2, voter : "tester3"}));
voterCoin.addBlock(new Block(4, "01/05/2018", {vote : 1, voter : "tester4"}));

//checking the blockchain contents and validity
console.log(JSON.stringify(voterCoin, null, 4));
console.log('Is blockchain valid? ' + voterCoin.isChainValid());


//attempts at sabotaging the blockchain (have at it! I tried to break it)
voterCoin.chain[1].data = { vote: 1, voter: "tester"};
for (let i = 1; i < voterCoin.chain.length; i++) {
voterCoin.chain[i].hash = voterCoin.chain[i].calculateHash();
voterCoin.chain[i].previousHash = voterCoin.chain[i-1].hash;
};


//rechecking validity after sabotage attempts
console.log(JSON.stringify(voterCoin, null, 4));
console.log('Is blockchain valid? ' + voterCoin.isChainValid());
