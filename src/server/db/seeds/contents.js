exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('contents')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('contents').insert([
        { id: 1, text: 'verify text could shown', userId: '100' },
        { id: 2, text: 'verify db works!', userId: 101 },
      ]);
    });
};
