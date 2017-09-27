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
    const hasCountry = yield app.mysql.query(knex.schema.hasTable('country').toString());
    if (hasCountry.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('country', function(table) {
        table.increments();
        table.string('China').notNullable().defaultTo('');
        table.string('America').notNullable().defaultTo('');
        table.string('England').notNullable().defaultTo('');
        table.integer('name').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      yield this.ctx.helper.member(app, 'country', 'China');
    }
  });
};
