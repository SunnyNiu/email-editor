exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('contents')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('contents').insert([
        {
          id: 1,
          text: JSON.stringify([]),
          userId: '1',
        },
      ]);
    });
};
