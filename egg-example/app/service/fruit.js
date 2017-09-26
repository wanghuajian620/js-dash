'use strict';

module.exports = app => {
  class Fruit extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('fruit', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('fruit', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * select() {
      let res;
      try {
        res = yield app.mysql.select('fruit');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }


    * delete(param) {
      try {
        yield app.mysql.delete('fruit', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('fruit', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Fruit;
};
