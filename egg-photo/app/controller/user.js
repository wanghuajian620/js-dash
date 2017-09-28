'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.user.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.user.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.user.get();
    }
    * select() {
      this.ctx.body = yield this.service.user.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.user.update(this.ctx.request.body);
    }
  }
  return UserController;
};
