'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  class Photo extends app.Service {
    // upload  photos
    * upload(url) {
      try {
        yield app.mysql.update('photo', url);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    // see all photos  S8 and  usual photo
    * list() {
      let res;
      try {
        knex.select('useID', 'model', 'votes').from('photo');
        yield app.mysql.select('photo', {
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    // votes 
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
