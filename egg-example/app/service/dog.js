'use strict';
module.exports = app => {
  class Dog extends app.Service {
    * find() {
      return 'new world';
    }
    * pig() {
      return 'kun son';
    }
  }
  return Dog;
};
