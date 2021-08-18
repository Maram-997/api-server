  'use strict';

const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

router.get('/Food', getAllFood);
router.post('/Food', createFood);

async function getAllFood(req, res) {
    let foodie = await Food.getAll();
    res.status(200).json(foodie);
}

async function createFood(req, res) {
    let food = req.body;
    let foodie = await Food.create(food);
    res.status(201).json(foodie);
}

module.exports = router;