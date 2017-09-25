'use strict';
const _ = require('lodash');


module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();// because * function ,so invoke must add yeild.
    }
    * index1() {
      const result = this.ctx.helper.foo(this.ctx.request.query.a);
      const result1 = this.ctx.helper.bar(this.ctx.request.query.b);
      this.ctx.body = result + ' ' + result1;
    }
    * sina() {
      const result = yield this.service.home.sina();
      this.ctx.body = result;
    }
    * sohu() {
      const result = yield this.service.home.sohu();
      this.ctx.body = result;
    }
    * test() {
      const result = yield this.service.home.test(); // yield this. behind  turn  dictory(service), file(home), last(invoked method)
      const result1 = yield this.service.test.test1();
      this.ctx.body = result + ' ' + result1;
    }
    * dog() {
      const result = yield this.service.dog.pig();
      const result1 = yield this.service.dog.find();
      this.ctx.body = result + ' ' + result1;
    }
    * lodash() {
      // const a = yield this.service.lodash.find();
      // const b = yield this.service.lodash.dig();
      // this.ctx.body = _.differenceBy(a, b, Math.floor);
      const c = yield this.service.lodash.pig();
      this.ctx.body = _.initial(c);
    }
    * shark() {
      const result = yield this.service.shark.bird();
      const result1 = yield this.service.home.shark();
      this.ctx.body = result + ' ' + result1;
    }
    * date() {
      this.ctx.body = yield this.service.home.date();
    }
    * date1() {
      this.ctx.body = yield this.service.home.date1();
    }
    * array() {
      this.ctx.body = yield this.service.array.union();
    }
    * unionBy() {
      this.ctx.body = yield this.service.array.unionBy();
    }
    * unionWith() {
      this.ctx.body = yield this.service.array.unionWith();
    }
  }
  return HomeController;
};
