'use strict';


module.exports = app => {
  class CountryController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.data.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.data.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.data.get();
    }
    * select() {
      this.ctx.body = yield this.service.data.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.data.update(this.ctx.request.body);
    }
  }
  return CountryController;
};
