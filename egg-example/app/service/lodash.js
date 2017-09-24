'use strict';
const _ = require('lodash');

module.exports = app => {
  class Lodash extends app.Service {
    * find() {
      const y = [ 1.3, 2.7, 3.8, 4.8 ];
      return _.initial(y);
    }
    * dig() {
      const x = [ 1.1, 2.5, 3.4 ];
      return _.differenceBy(x);
    }
    * pig() {
      const z = [ 5, 10, 29 ];
      return _.initial(z);
    }
  }
  return Lodash;
};

