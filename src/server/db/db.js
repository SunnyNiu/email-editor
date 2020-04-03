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
  return db('contents')
    .where('userId', userId)
    .update({ text });
}