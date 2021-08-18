'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');
const Collection = require('./collection-class');

var sequelize = new Sequelize(POSTGRES_URI, {});

const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);


const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);

module.exports = {
    db: sequelize,
    Food: foodCollection,
    Clothes: clothesCollection
}