const { Clothes } = require('../models');


async function createClothes(req, res) {
    let info = req.body;
    let cloth = await Clothes.create(info);
    res.status(201).json(cloth);
}

async function getClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothes = await Clothes.findOne({ where: { id: id } });
    res.status(200).json(clothes);
}

async function getAllClothes(req, res) {
    let all = await Clothes.findAll();
    res.status(200).json(all);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let ClothesInfo = req.body;
    let selectedClothes = await Clothes.findOne({ where: { id } });
    let updateClothes = await selectedClothes.update(ClothesInfo);
    res.status(200).json(updateClothes);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id } });
    res.status(204).json(deleteClothes);
}

module.exports = {
    createClothes,
    getClothes,
    getAllClothes,
    updateClothes,
    deleteClothes,
}