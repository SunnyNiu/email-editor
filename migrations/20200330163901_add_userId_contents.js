exports.up = function(knex) {
  return knex.schema.table('contents', t => {
    t.string('userId').defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('contents', t => {
    t.dropColumns('userId');
  });
};
