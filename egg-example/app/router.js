'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/a', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/dog', 'home.dog');
  app.get('/lodash', 'home.lodash');
  app.post('/shark', 'home.shark');
  app.post('/date', 'home.date');
  app.post('/date1', 'home.date1');
  app.get('/array', 'home.array');
  app.get('/unionBy', 'home.unionBy');
  app.get('/unionWith', 'home.unionWith');
  // app.get('/zip', 'home.zip');
  // app.get('/helper', 'nome.helper');
};
