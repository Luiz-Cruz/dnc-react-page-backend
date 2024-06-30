const personRepository = require('../repository/person.repository');

async function getAll() {
    return personRepository.findAll();
}

module.exports = {
    getAll,
};
