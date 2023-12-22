exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notNullable().unique()
    tbl.string('make', 130).notNullable()
    tbl.string('model', 130).notNullable()
    tbl.numeric('mileage').unsigned().notNullable()
    tbl.string('title', 130)
    tbl.string('transmission', 130)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
