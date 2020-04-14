exports.up = knex => {
  return knex.schema.alterTable('contents', t => {
    t.jsonb('text')
      .notNull()
      .alter();
  });
};

exports.down = knex => {
  return knex.schema.alterTable('contents', t => {
    t.dropColumns('text');
  });
};
