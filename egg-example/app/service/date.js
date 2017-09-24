'use strict';
module.exports = app => {
  class Date extends app.Service {
    * find() {
      return 'new world';
    }
  }
  return Date;
};

