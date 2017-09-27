'use strict';

module.exports = app => {
  app.post('/one', 'country.insert');
  app.post('/two', 'country.delete');
  app.post('/three', 'country.get');
  app.post('/four', 'country.select');
  app.post('/five', 'country.update');
};
