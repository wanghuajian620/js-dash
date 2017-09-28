'use strict';

module.exports = app => {
  class VotesController extends app.Controller {
    * insert() {
      this.ctx.body = yield this.service.votes.insert(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.votes.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.votes.get();
    }
    * select() {
      this.ctx.body = yield this.service.votes.select(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.votes.update(this.ctx.request.body);
    }
  }
  return VotesController;
};
