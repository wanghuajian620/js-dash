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
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('mobile').notNullable().defaultTo('');
        table.string('wechat').notNullable().defaultTo('');
        table.integer('votetimes').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('created').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.member(app, 'user', 'mobile');
      yield ctx.helper.member(app, 'user', 'wechat');
    }
    const hasPhoto = yield app.mysql.query(knex.schema.hasTable('photo').toString());
    if (hasPhoto.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('photo', function(table) {
        table.increments();
        table.string('userID').notNullable().defaultTo('');
        table.string('URL').notNullable().defaultTo('');
        table.string('status').notNullable().defaultTo('');
        table.string('Model').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.timestamp('created').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.member(app, 'photo', 'userID');
      yield ctx.helper.member(app, 'photo', 'URL');
    }
  });
};
