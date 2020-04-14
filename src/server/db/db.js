const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../../../knexfile')[environment];

const connection = knex(config);

export function getContentText(userId, db = connection) {
  return db('contents')
    .where('userId', userId)
    .select()
    .first();
}

export function saveContentText(userId, text, db = connection) {
  return getContentText(userId).then(exist => {
    // eslint-disable-next-line no-unused-expressions
    exist === undefined
      ? db('contents')
          .insert({ userId, text })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      : db('contents')
          .where('userId', userId)
          .update({ text })
          // eslint-disable-next-line no-console
          .catch(e => console.log('update db', e));
  });
}
