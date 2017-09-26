'use strict';


module.exports = app => {
  class FruitController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.fruit.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.fruit.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.fruit.get(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.fruit.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.fruit.update(this.ctx.request.body);
    }
  }
  return FruitController;
};
