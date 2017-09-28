'use strict';

const knex = require('knex')({
  client: 'mysql',
});
module.exports = {
  * member(app, table, column) {
    const uniqueName = knex.schema.alterTable(table, function(t) {
      t.unique(column);
    });
    yield app.mysql.query(uniqueName.toString());
  },
};
