const specialitiesService = require('../service/specialities.service');

async function create(req, res) {
    const specialities = await specialitiesService.create(req.body);
    res.status(201).json(specialities);
}

async function getAll(req, res) {
    const specialities = await specialitiesService.getAll();
    res.status(200).json(specialities);
}


module.exports = {
    create,
    getAll
};
