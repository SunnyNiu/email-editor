// Update with your config settings.

const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'dev_user',
      password: 'password',
      database: 'postgres',
      port: 5432,
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'src/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src/server/db/seeds'),
    },
  },
  test: {
    client: 'pg',
    connection: {
      connection: 'postgres://localhost:5432/movies',
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'src/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src/server/db/seeds'),
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
