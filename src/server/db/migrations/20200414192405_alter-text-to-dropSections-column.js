exports.up = knex => {
  return knex.schema.alterTable('contents', t => {
    t.renameColumn('text', 'dropSections');
  });
};

exports.down = knex => {
  return knex.schema.alterTable('contents', t => {
    t.dropColumns('dropSection');
  });
};
