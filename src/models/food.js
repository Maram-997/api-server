'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kind: {
        type: DataTypes.STRING,
    },
});

module.exports = Food