const db = require('../database/config/db');

async function findAll() {
    return db('person').select('person.id', 'person.name', 'specialities.name as specialities', 'person.city', 'person.experience')
    .join('specialities', 'person.specialty_id', 'specialities.id')
}

module.exports = {
    findAll,
};
