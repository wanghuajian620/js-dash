'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * upload(x) {
      try {
        yield app.mysql.update('photo', x);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * list() {
      let res;
      try {
        yield app.mysql.select('photo', {
          where: {
            photo: [ '', '' ],
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * votes(x) {
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
