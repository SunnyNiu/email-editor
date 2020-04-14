exports.up = knex => {
  return knex.schema.createTable('contents', t => {
    t.increments('id');
    t.text('text').notNull();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('contents');
};
