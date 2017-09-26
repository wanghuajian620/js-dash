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
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasBird = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasBird.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('class').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasFruit = yield app.mysql.query(knex.schema.hasTable('fruit').toString());
    if (hasFruit.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('fruit', function(table) {
        table.increments();
        table.string('apple').notNullable().defaultTo('');
        table.string('banana').notNullable().defaultTo('');
        table.integer('count').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
    const hasMoney = yield app.mysql.query(knex.schema.hasTable('money').toString());
    if (hasMoney.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('money', function(table) {
        table.increments();
        table.string('tenyuan').notNullable().defaultTo('');
        table.string('hundred').notNullable().defaultTo('');
        table.string('thousand').notNullable().defaultTo('');
        table.integer('count').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });
};
