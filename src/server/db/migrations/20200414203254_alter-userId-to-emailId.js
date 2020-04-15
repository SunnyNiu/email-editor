exports.up = knex => {
  return knex.schema.alterTable('contents', t => {
    t.renameColumn('userId', 'emailId');
  });
};

exports.down = knex => {
  return knex.schema.alterTable('contents', t => {
    t.dropColumns('emailId');
  });
};
