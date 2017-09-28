'use strict';

const knex = require('knex')({
  client: 'mysql',
});
module.exports = {
  * member(app, table, colum) {
    const uniqueName = knex.schema.alterTable(table, function(t) {
      t.unique(colum);
    });
    yield app.mysql.query(uniqueName.toString());
  },
};
