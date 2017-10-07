'use strict';

const knex = require('knex')({
  client: 'mysql',
});


module.exports = app => {
  app.beforeStart(function* () {
    const hasDatatype = yield app.mysql.query(knex.schema.hasTable('numeric').toString());
    if (hasDatatype.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('numeric', function(table) {
        table.string('numteric').notNullable().defaultTo('');
        table.tinyint('tiny').notNullable().defaultTo(0);
        table.smallint('small').notNullable().defaultTo(0);
        table.mediumint('medium').notNullable().defaultTo(0);
        table.int('int').notNullable().defaultTo(0);
        table.bigint('big').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
  });
};
