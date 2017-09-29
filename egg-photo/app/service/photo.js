'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * update(x) {
      try {
        yield app.mysql.update('photo', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get(x) {
      try {
        yield app.mysql.get('photo', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * insert(x) {
      try {
        yield app.mysql.insert('photo', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Photo;
};
