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
      function sso(x) {
        if (x < 10) {
          return '0' + x;
        }
        return x;
      }
      const a = new Date();
      const b = a.getFullYear();
      const c = sso(a.getMonth() + 1);
      const d = sso(a.getDate());
      const e = sso(a.getHours());
      const f = sso(a.getMinutes());
      const g = sso(a.getSeconds());
      return `${b}-${c}-${d}-${e}-${f}-${g}`;
    }
  }
  return Home;
};
