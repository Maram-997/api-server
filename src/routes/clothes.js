'use strict';

const express = require('express');
const router = express.Router();
const { Clothes } = require('../models/index');

router.get('/Clothes', getAllClothes);
router.post('/Clothes', createClothes);

async function getAllClothes(req, res) {
    let clothes = await Clothes.getAll();
    res.status(200).json(clothes);
}

async function createClothes(req, res) {
    let cloth = req.body;
    let clothes = await Clothes.create(cloth);
    res.status(201).json(clothes);
}

module.exports = router;