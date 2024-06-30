const specialitiesRepository = require('../repository/specialities.repository');

function create(newSpeciality) {
    return specialitiesRepository.create(newSpeciality);
}

async function getAll() {
    const specialities = await specialitiesRepository.getAll();
    const names = specialities.map(speciality => speciality.name);
    return names;
}


module.exports = {
    create,
    getAll
};
