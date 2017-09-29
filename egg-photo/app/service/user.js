'use strict';

module.exports = app => {
  class User extends app.Service {
    * insert(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get(x) {
      try {
        yield app.mysql.get('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return User;
};
