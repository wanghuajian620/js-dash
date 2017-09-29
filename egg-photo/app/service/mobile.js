'use strict';

module.exports = app => {
  class Mobile extends app.Service {
    * insert(x) {
      try {
        yield app.mysql.insert('mobile', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(x) {
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
