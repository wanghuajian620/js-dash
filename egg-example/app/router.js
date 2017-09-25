'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/a', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');// behind home is  test,  it is equal with controller.  controller's method is this test. 
  app.get('/dog', 'home.dog');
  app.get('/lodash', 'home.lodash');
  app.post('/shark', 'home.shark');
  app.post('/date', 'home.date');
  app.post('/date1', 'home.date1');
  app.get('/array', 'home.array');
  app.get('/unionBy', 'home.unionBy');
  app.get('/unionWith', 'home.unionWith');
  app.get('/zip', 'home.zip');
  app.get('/zipWith', 'home.zipWith');
  app.post('/new', 'mysql.create');
  app.post('/old', 'mysql.delete');
  app.post('/apple', 'mysql.get');
  app.post('/panda', 'mysql.update');
  app.post('/one', 'student.create');
  app.post('/two', 'student.delete');
  app.post('/three', 'student.get');
  app.post('/four', 'student.update');
  // app.get('/helper', 'home.helper');
};
