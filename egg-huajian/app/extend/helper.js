'use strict';
/* module.exports = {
  foo(fruit) {
    return fruit * 1 + 2;
  },
  bar(food) {
    return food * 3;
  },
};
*/
const knex = require('knex');
module.exports = {
  * member(app, table, colum) {
    const uniqueName = knex.schema.alterTable(table, function(t) {
      t.unique(colum);
    });
    yield app.mysql.query(uniqueName.toString());
  },
};
