exports.up = function (knex) {
  return knex.schema.createTable('bootcamp', table => {
    table.increments('id')
    table.int('week')
    table.string('coreConcepts')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bootcamp')
}
