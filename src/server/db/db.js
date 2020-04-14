const environment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const config = require('../../../knexfile')[environment];

const connection = knex(config);

export function getContentSections(emailId, db = connection) {
  return (
    db('contents')
      .where('emailId', emailId)
      .select()
      .first()
      // eslint-disable-next-line no-console
      .catch(e => console.log(e))
  );
}

export function saveContentSections(emailId, email, db = connection) {
  return getContentSections(emailId).then(exist => {
    // eslint-disable-next-line no-unused-expressions
    exist === undefined
      ? db('contents')
          .insert({ emailId, email })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      : db('contents')
          .where('emailId', emailId)
          .update({ email })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e));
  });
}
