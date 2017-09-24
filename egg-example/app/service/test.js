'use strict';
module.exports = app => {
  class Test extends app.Service {
    * find() {
      return 'new world';
    }

    * test1() {
      return 'test1';
    }
  }
  return Test;
};
