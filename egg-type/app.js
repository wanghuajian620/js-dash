'use strict';

const knex = require('knex')({
  client: 'mysql',
});


module.exports = app => {
  app.beforeStart(function* () {
    const hasDatatype = yield app.mysql.query(knex.schema.hasTable('numeric').toString());
    if (hasDatatype.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('numeric', function(table) {
        table.string('string').notNullable().defaultTo('');
        table.integer('integer').notNullable().defaultTo(0);
        table.tinyint('tinyint').notNullable().defaultTo(0);
        table.smallint('smallint').notNullable().defaultTo(0);
        table.mediumint('mediumint').notNullable().defaultTo(0);
        table.bigInteger('biginteger').notNullable().defaultTo(0);
        table.float('float').notNullable().defaultTo(0.0);
        table.text('text').notNullable().defaultTo('');
        table.boolean('boolean').notNullable().defaultTo(0);
        // table.date('date').notNullable().defaultTo('');
        // table.int('int').notNullable().defaultTo();
        // table.fixedpoint('fixed-point').notNullable().defaultTo();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasDatatype1 = yield app.mysql.query(knex.schema.hasTable('data').toString());
    if (hasDatatype1.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('data', function(table) {
        table.date('date').notNullable().defaultTo();
        table.dateTime('datetime').notNullable().defaultTo();
        table.time('time').notNullable().defaultTo(0);
        // table.year('year').notNullable().defaultTo();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

  });
};
