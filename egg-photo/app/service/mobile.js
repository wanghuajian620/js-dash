'use strict';

module.exports = app => {
  class Mobile extends app.Service {
    * set(x) {
      try {
        yield app.mysql.insert('mobile', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * modify(x) {
      try {
        yield app.mysql.update('mobile', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Mobile;
};
