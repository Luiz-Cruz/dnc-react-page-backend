exports.seed = function(knex) {
  return knex('person').del()
    .then(function () {
      return knex('person').insert([
        {
          "name": "Julinhos",
            "specialty_id": 1,
            "city": "São Paulo",
            "experience": 3
          },
          {
            "name": "Ciclano Silva",
            "specialty_id": 2,
            "city": "Rio de Janeiro",
            "experience": 59
          },
          {
            "name": "Karen Oliveira",
            "specialty_id": 3,
            "city": "Belo Horizonte",
            "experience": 10
        },
      ]);
    });
};
