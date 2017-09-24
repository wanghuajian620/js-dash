'use strict';
module.exports = app => {
  class dog extends app.Service {
    * find() {
      return 'new world';
    }
    * pig() {
      return 'kun son';
    }
  }
  return dog;
};
