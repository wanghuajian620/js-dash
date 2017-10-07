'use strict';


module.exports = app => {
  class CountryController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.type.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.type.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.type.get();
    }
    * select() {
      this.ctx.body = yield this.service.type.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.type.update(this.ctx.request.body);
    }
  }
  return CountryController;
};
