exports.up = function(knex) {
  return knex.schema.createTable('contents', t => {
    t.increments('id');
    t.string('text').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contents');
};
