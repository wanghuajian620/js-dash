'use strict';


module.exports = app => {
  class CountryController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.country.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.country.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.country.get();
    }
    * select() {
      this.ctx.body = yield this.service.country.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.country.update(this.ctx.request.body);
    }
  }
  return CountryController;
};
