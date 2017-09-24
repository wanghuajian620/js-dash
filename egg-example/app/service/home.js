'use strict';
module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'new world';
    }

    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }

    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');// curl is  in order to  search  web, it must  has.
    }

    * test() {
      return 'home.test';// return anything is  not care.  love  what  what. 
    }
    * dog() {
      return 'kun son';
    }
    * lodash() {
      return 'jianjian';
    }
    * shark() {
      const z = function(x) {
        return x + 1;
      };
      return z(2);
    }
    * date() {
      const today = new Date();
      return today + 8;
    }
    * date1() {
      const a = new Date();
      const b = a.getFullYear();
      const c = a.getMonth();
      const d = a.getDate();
      const e = a.getHours();
      const f = a.getMinutes();
      const g = a.getSeconds();
      return `${b}-${c + 1}-${d}-${e}-${f}-${g}`;
    }
  }
  return Home;
};
