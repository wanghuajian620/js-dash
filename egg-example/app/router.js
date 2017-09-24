'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/a', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/dog', 'home.dog');
  app.get('/lodash', 'home.lodash');
  app.get('/shark', 'home.shark');
  // app.get('/helper', 'nome.helper');
};
