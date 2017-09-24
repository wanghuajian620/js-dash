'use strict';

module.exports = app => {
  class Shark extends app.Service {
    * bird() {
      return 'new world';
    }
  }
  return Shark;
};
