'use strict';

module.exports = app => {
  app.post('/competitor', 'home.insert');
  app.post('/competitor1', 'home.delete');
  app.post('/competitor2', 'home.get');
  app.post('/competitor', 'home.select');
  app.post('/competitor', 'home.update');
};
