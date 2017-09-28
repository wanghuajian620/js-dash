'use strict';
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '111111',
    database: 'test',
  },
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('Wexin').notNullable().defaultTo('');
        table.string('upload photo').notNullable().defaultTo('');
        table.string('see photo').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.string('see votes').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasPhoto = yield app.mysql.query(knex.schema.hasTable('photo').toString());
    if (hasPhoto.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('photo', function(table) {
        table.increments();
        table.string('competitor').notNullable().defaultTo('');
        table.string('worker').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasVotes = yield app.mysql.query(knex.schema.hasTable('votes').toString());
    if (hasVotes.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('votes', function(table) {
        table.increments();
        table.string('competitor').notNullable().defaultTo('');
        table.string('worker').notNullable().defaultTo('');
        table.string('nocompetitor').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
  });
};
