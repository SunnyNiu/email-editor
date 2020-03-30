exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contents')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contents').insert([
        { id: 1, text: 'verify text could shown' },
        { id: 2, text: 'verify db works!' },
      ]);
    });
};
