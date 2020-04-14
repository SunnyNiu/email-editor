const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../../../knexfile')[environment];

const connection = knex(config);

export function getContentSections(userId, db = connection) {
  return (
    db('contents')
      .where('userId', userId)
      .select()
      .first()
      // eslint-disable-next-line no-console
      .catch(e => console.log(e))
  );
}

export function saveContentSections(userId, email, db = connection) {
  return getContentSections(userId).then(exist => {
    // eslint-disable-next-line no-unused-expressions
    exist === undefined
      ? db('contents')
          .insert({ userId, email })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      : db('contents')
          .where('userId', userId)
          .update({ email })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e));
  });
}
