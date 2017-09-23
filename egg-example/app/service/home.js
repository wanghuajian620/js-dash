'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'new world';
    }
  }
  return Home;
};
