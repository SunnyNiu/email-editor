exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('contents')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('contents').insert([
        {
          id: 1,
          email: JSON.stringify([]),
          emailId: '1',
        },
      ]);
    });
};
