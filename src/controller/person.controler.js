const personService = require('../service/person.service');

async function getAll(req, res) {
    const people = await personService.getAll();
    res.status(200).json(people);
}

module.exports = {
    getAll,
};
