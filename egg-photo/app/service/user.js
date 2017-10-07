'use strict';

module.exports = app => {
  class User extends app.Service {
    // user register
    * register(x) {
      try {
        yield app.mysql.insert('user', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    // user login 
    * login() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', {});
        yield conn.update('mobile', {});
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return User;
};
