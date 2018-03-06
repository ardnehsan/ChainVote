module.exports = function (sequelize, DataTypes) {
    var Voter = sequelize.define("Voter", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        VRN : {
            type: DataTypes.INTEGER,
        },
        isRegistered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

        // // len is a validation that checks that our Voter is between 1 and 140 characters
        //     validate: {
        //     len: [1, 140]
        // }
    });
    return Voter;
};
