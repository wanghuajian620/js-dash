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


module.exports = app2 => {
  app2.beforeStart(function* () {
    const hasUser = yield app2.mysql.query(knex.schema.hasTable('student').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('class').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app2.mysql.query(userSchema.toString());
    }
  });
};
