'use strict';
const _ = require('lodash');

module.exports = app => {
  class Array extends app.Service {
    * union() {
      const a = [ 1, 2 ];
      const b = [ 1, 3 ];
      return _.union(a, b);
    }
    * unionBy() {
      const x = [ 2.4 ];
      const y = [ 1.3, 2.1 ];
      return _.unionBy(x, y, Math.floor);
    }
    * unionWith() {
      const a = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
      const b = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
      return _.unionWith(a, b, _.isEqual);
    }
  }
  return Array;
};
