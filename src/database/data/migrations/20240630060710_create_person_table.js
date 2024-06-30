exports.up = function(knex) {
    return knex.schema.createTable("person", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("specialty_id").unsigned().notNullable().references("id").inTable("specialities");
        table.string("city").notNullable();
        table.integer("experience").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("person");
};
