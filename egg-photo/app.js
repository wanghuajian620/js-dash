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
    const hasCompetitor = yield app.mysql.query(knex.schema.hasTable('competitor').toString());
    if (hasCompetitor.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('competitor', function(table) {
        table.increments();
        table.string('Wexin').notNullable().defaultTo('');
        table.string('photo').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
  });
};
