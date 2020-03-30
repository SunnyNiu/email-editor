const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile')[environment];
const connection = require('knex')(config);

function saveContentText(text, db = connection) {
  return db('contents').insert({ text });
}

function getContentText(id, db = connection) {
  return db('contents')
    .where('id', id)
    .select();
}

module.exports = {
  saveContentText,
  getContentText,
};
