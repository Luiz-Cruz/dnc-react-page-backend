exports.up = knex =>
    knex.schema.createTable("specialities", table => {
        table.increments('id');
        table.string('name').notNullable();
    });

exports.down = knex => knex.schema.dropTableIfExists("specialities");
