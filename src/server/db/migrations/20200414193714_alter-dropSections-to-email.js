exports.up = knex => {
  return knex.schema.alterTable('contents', t => {
    t.renameColumn('dropSections', 'email');
  });
};

exports.down = knex => {
  return knex.schema.alterTable('contents', t => {
    t.dropColumns('email');
  });
};
