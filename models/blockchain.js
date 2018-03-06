module.exports = function (sequelize, DataTypes) {
    var BlockChain = sequelize.define("BlockChain", {
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false
        },
        previousHash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hash: {
            type: DataTypes.STRING,
            allowNull: false
        }


        // // len is a validation that checks that our Voter is between 1 and 140 characters
        //     validate: {
        //     len: [1, 140]
        // }
    });
    return BlockChain;
};
