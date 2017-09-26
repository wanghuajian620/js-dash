'use strict';


module.exports = app => {
  class MoneyController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.money.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.money.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.money.get();
    }
    * select() {
      this.ctx.body = yield this.service.money.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.money.update(this.ctx.request.body);
    }
  }
  return MoneyController;
};
