'use strict';

module.exports = app => {
  class Money extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('money', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('fruit', { id: 2, a: 'baizhang' });
        yield conn.update('money', { id: 2, hundred: 'alsomany' });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('money');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }


    * delete(param) {
      try {
        yield app.mysql.delete('money', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('money', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Money;
};
