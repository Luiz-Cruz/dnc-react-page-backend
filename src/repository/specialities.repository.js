const db = require('../database/config/db');

function create(newSpeciality) {
    return db("specialities").insert(newSpeciality).returning("*");
}

function getAll() {
    return db("specialities").select("*");
}

module.exports = {
    create,
    getAll
};
