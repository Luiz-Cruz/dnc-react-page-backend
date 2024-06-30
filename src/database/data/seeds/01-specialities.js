exports.seed = function(knex) {
  return knex('specialities').del()
    .then(function () {
      return knex('specialities').insert([
        {
          "name": "Front-end"
        },
        {
          "name": "Back-end"
        },
        {
          "name": "Mobile"
        }
      ]);
    });
};
