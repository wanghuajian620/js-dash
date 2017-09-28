'use strict';

module.exports = app => {
  class PhotoController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.photo.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.photo.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.photo.get();
    }
    * select() {
      this.ctx.body = yield this.service.photo.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.photo.update(this.ctx.request.body);
    }
  }
  return PhotoController;
};
